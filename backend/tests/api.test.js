'use strict';

const { before, after, test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { server } = require('../server');

let baseUrl;
let token;

before(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
  const response = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@labaccess.local', password: 'admin123' })
  });
  const result = await response.json();
  token = result.data.token;
});

after(() => new Promise(resolve => server.close(resolve)));

test('authentifie le compte administrateur de démonstration', async () => {
  assert.ok(token);
  const response = await fetch(`${baseUrl}/api/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
  const result = await response.json();
  assert.equal(response.status, 200);
  assert.equal(result.data.role, 'admin');
  assert.ok(result.data.permissions.includes('people:manage'));
});

test('authentifie un agent avec ses permissions opérationnelles', async () => {
  const response = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'agent@labaccess.local', password: 'agent123' })
  });
  const result = await response.json();
  assert.equal(response.status, 200);
  assert.equal(result.data.user.role, 'agent');
  assert.ok(result.data.user.permissions.includes('scans:create'));
  assert.ok(!result.data.user.permissions.includes('people:manage'));
  const forbidden = await fetch(`${baseUrl}/api/people`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${result.data.token}` },
    body: JSON.stringify({ type: 'student' })
  });
  assert.equal(forbidden.status, 403);
});

test('refuse des identifiants invalides et ne persiste pas de mot de passe brut', async () => {
  const response = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@labaccess.local', password: 'incorrect' })
  });
  assert.equal(response.status, 401);
  const data = JSON.parse(fs.readFileSync(require('node:path').join(__dirname, '..', 'data', 'labaccess.json'), 'utf8'));
  assert.ok(data.users.every(user => user.password_hash?.startsWith('scrypt$') && !user.password));
});

test('expose les données nécessaires au contrôle d’accès', async () => {
  const response = await fetch(`${baseUrl}/api/dashboard`, { headers: { Authorization: `Bearer ${token}` } });
  const result = await response.json();
  assert.equal(response.status, 200);
  assert.ok(result.data.people >= 3);
  assert.ok(result.data.availableComputers >= 1);
});

test('refuse un QR Code dont le format est invalide', async () => {
  const response = await fetch(`${baseUrl}/api/scans`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ qr: 'invalide', roomId: 'r-lab', computerId: 'private' })
  });
  const result = await response.json();
  assert.equal(response.status, 400);
  assert.match(result.message, /Format QR invalide/);
});

test('le deuxième scan termine une session et libère le workflow', async () => {
  const scan = () => fetch(`${baseUrl}/api/scans`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ qr: 'LAB-STU-2026-00001', roomId: 'r-lab', computerId: 'private' })
  }).then(async response => ({ response, result: await response.json() }));

  let first = await scan();
  if (first.result.data.action === 'exit') first = await scan();
  assert.equal(first.result.data.action, 'entry');
  const second = await scan();
  assert.equal(second.response.status, 200);
  assert.equal(second.result.data.action, 'exit');
  assert.equal(second.result.data.session.status, 'completed');
  assert.ok(second.result.data.session.exitAt);
  assert.equal(typeof second.result.data.session.durationMinutes, 'number');
  const sessions = await fetch(`${baseUrl}/api/sessions`, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.json());
  const stored = sessions.data.find(session => session.id === second.result.data.session.id);
  assert.equal(stored.status, 'completed');
  assert.ok(stored.exitAt);
  const logs = await fetch(`${baseUrl}/api/access-logs`, { headers: { Authorization: `Bearer ${token}` } }).then(response => response.json());
  const sessionLogs = logs.data.filter(log => log.sessionId === stored.id);
  assert.deepEqual(sessionLogs.map(log => log.action).sort(), ['entry', 'exit']);
});

test('un poste attribué est occupé puis redevient disponible à la sortie', async () => {
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
  const scan = () => fetch(`${baseUrl}/api/scans`, {
    method: 'POST', headers,
    body: JSON.stringify({ qr: 'LAB-STU-2026-00002', roomId: 'r-lab', computerId: 'pc-01' })
  }).then(async response => ({ response, result: await response.json() }));
  let first = await scan();
  if (first.result.data.action === 'exit') first = await scan();
  assert.equal(first.result.data.action, 'entry');
  let computers = await fetch(`${baseUrl}/api/computers`, { headers }).then(response => response.json());
  assert.equal(computers.data.find(computer => computer.id === 'pc-01').status, 'occupied');
  await scan();
  computers = await fetch(`${baseUrl}/api/computers`, { headers }).then(response => response.json());
  assert.equal(computers.data.find(computer => computer.id === 'pc-01').status, 'available');
});

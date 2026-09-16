# Design System - LabAccess

## 1. Vue d'Ensemble

Le design system de LabAccess définit les règles visuelles et d'interaction pour garantir une interface cohérente, professionnelle et adaptée à une utilisation quotidienne par des agents dans un environnement universitaire.

## 2. Principes de Design

- **Professionnel** : Adapté à un environnement universitaire
- **Moderne** : Design contemporain et épuré
- **Sobre** : Pas de distractions inutiles
- **Accessible** : Conforme WCAG AA
- **Lisible** : Typographie claire et contrastée
- **Responsive** : Adapté à tous les écrans
- **Efficace** : Optimisé pour une utilisation quotidienne

## 3. Palette de Couleurs

### 3.1 Couleurs Principales

#### Primary
- **Utilisation :** Actions principales, boutons principaux, éléments actifs
- **HEX :** `#2563EB` (Blue 600)
- **Hover :** `#1D4ED8` (Blue 700)
- **Focus :** `#1E40AF` (Blue 800)
- **Disabled :** `#93C5FD` (Blue 300)

#### Secondary
- **Utilisation :** Actions secondaires, boutons secondaires
- **HEX :** `#64748B` (Slate 500)
- **Hover :** `#475569` (Slate 600)
- **Focus :** `#334155` (Slate 700)
- **Disabled :** `#CBD5E1` (Slate 300)

### 3.2 Couleurs Fonctionnelles

#### Success
- **Utilisation :** Actions réussies, validations, confirmations
- **HEX :** `#10B981` (Emerald 500)
- **Hover :** `#059669` (Emerald 600)
- **Background :** `#D1FAE5` (Emerald 100)
- **Text :** `#065F46` (Emerald 800)

#### Warning
- **Utilisation :** Avertissements, attentions
- **HEX :** `#F59E0B` (Amber 500)
- **Hover :** `#D97706` (Amber 600)
- **Background :** `#FEF3C7` (Amber 100)
- **Text :** `#92400E` (Amber 800)

#### Danger
- **Utilisation :** Erreurs, actions destructrices, refus
- **HEX :** `#EF4444` (Red 500)
- **Hover :** `#DC2626` (Red 600)
- **Background :** `#FEE2E2` (Red 100)
- **Text :** `#991B1B` (Red 800)

#### Info
- **Utilisation :** Informations, notifications
- **HEX :** `#3B82F6` (Blue 500)
- **Hover :** `#2563EB` (Blue 600)
- **Background :** `#DBEAFE` (Blue 100)
- **Text :** `#1E40AF` (Blue 800)

### 3.3 Couleurs Neutres

#### Background
- **Principal :** `#FFFFFF` (White)
- **Secondaire :** `#F8FAFC` (Slate 50)
- **Tertiaire :** `#F1F5F9` (Slate 100)

#### Surface
- **Principal :** `#FFFFFF` (White)
- **Secondaire :** `#F8FAFC` (Slate 50)
- **Hover :** `#F1F5F9` (Slate 100)

#### Text
- **Principal :** `#0F172A` (Slate 900)
- **Secondaire :** `#475569` (Slate 600)
- **Tertiaire :** `#94A3B8` (Slate 400)
- **Disabled :** `#CBD5E1` (Slate 300)

#### Border
- **Principal :** `#E2E8F0` (Slate 200)
- **Focus :** `#3B82F6` (Blue 500)
- **Error :** `#EF4444` (Red 500)

## 4. Typographie

### 4.1 Familles de Polices

#### Principal
- **Nom :** Inter ou system-ui
- **Utilisation :** Texte principal, titres
- **Fallback :** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

#### Monospace
- **Nom :** JetBrains Mono ou monospace
- **Utilisation :** Code, identifiants, données techniques
- **Fallback :** "Courier New", monospace

### 4.2 Tailles de Titres

#### H1
- **Taille :** 32px (2rem)
- **Poids :** 700 (Bold)
- **Hauteur de ligne :** 1.2
- **Couleur :** Slate 900
- **Utilisation :** Titre principal de la page

#### H2
- **Taille :** 24px (1.5rem)
- **Poids :** 600 (SemiBold)
- **Hauteur de ligne :** 1.3
- **Couleur :** Slate 900
- **Utilisation :** Titres de section

#### H3
- **Taille :** 20px (1.25rem)
- **Poids :** 600 (SemiBold)
- **Hauteur de ligne :** 1.4
- **Couleur :** Slate 900
- **Utilisation :** Sous-titres

#### H4
- **Taille :** 16px (1rem)
- **Poids :** 600 (SemiBold)
- **Hauteur de ligne :** 1.5
- **Couleur :** Slate 900
- **Utilisation :** Titres de cartes, de sections

### 4.3 Tailles de Texte

#### Texte Large
- **Taille :** 18px (1.125rem)
- **Poids :** 400 (Regular)
- **Hauteur de ligne :** 1.5
- **Couleur :** Slate 700
- **Utilisation :** Texte important

#### Texte Normal
- **Taille :** 16px (1rem)
- **Poids :** 400 (Regular)
- **Hauteur de ligne :** 1.5
- **Couleur :** Slate 600
- **Utilisation :** Texte courant

#### Texte Petit
- **Taille :** 14px (0.875rem)
- **Poids :** 400 (Regular)
- **Hauteur de ligne :** 1.5
- **Couleur :** Slate 600
- **Utilisation :** Texte secondaire

#### Texte Très Petit
- **Taille :** 12px (0.75rem)
- **Poids :** 400 (Regular)
- **Hauteur de ligne :** 1.5
- **Couleur :** Slate 500
- **Utilisation :** Labels, métadonnées

### 4.4 Styles de Texte

#### Bold
- **Poids :** 700 (Bold)
- **Utilisation :** Emphase forte

#### SemiBold
- **Poids :** 600 (SemiBold)
- **Utilisation :** Emphase moyenne

#### Medium
- **Poids :** 500 (Medium)
- **Utilisation :** Emphase légère

#### Regular
- **Poids :** 400 (Regular)
- **Utilisation :** Texte normal

#### Light
- **Poids :** 300 (Light)
- **Utilisation :** Texte discret

## 5. Espacements

### 5.1 Échelle d'Espacement

- **0 :** 0px
- **1 :** 4px (0.25rem)
- **2 :** 8px (0.5rem)
- **3 :** 12px (0.75rem)
- **4 :** 16px (1rem)
- **5 :** 20px (1.25rem)
- **6 :** 24px (1.5rem)
- **8 :** 32px (2rem)
- **10 :** 40px (2.5rem)
- **12 :** 48px (3rem)
- **16 :** 64px (4rem)

### 5.2 Utilisation

#### Padding
- **Petit :** 8px - 12px
- **Normal :** 16px
- **Grand :** 24px - 32px

#### Margin
- **Petit :** 8px - 12px
- **Normal :** 16px
- **Grand :** 24px - 32px

#### Gap
- **Petit :** 8px
- **Normal :** 16px
- **Grand :** 24px

## 6. Boutons

### 6.1 Bouton Principal (Primary)

- **Background :** Primary (Blue 600)
- **Text :** White
- **Border :** None
- **Padding :** 12px 24px
- **Border-radius :** 8px
- **Font-size :** 16px
- **Font-weight :** 600
- **Hover :** Primary Dark (Blue 700)
- **Focus :** Primary Darker (Blue 800) + outline
- **Disabled :** Primary Light (Blue 300)

### 6.2 Bouton Secondaire (Secondary)

- **Background :** Transparent
- **Text :** Secondary (Slate 500)
- **Border :** 1px solid Border (Slate 200)
- **Padding :** 12px 24px
- **Border-radius :** 8px
- **Font-size :** 16px
- **Font-weight :** 600
- **Hover :** Background (Slate 50)
- **Focus :** Background (Slate 100) + outline
- **Disabled :** Text Disabled (Slate 300)

### 6.3 Bouton Danger (Danger)

- **Background :** Danger (Red 500)
- **Text :** White
- **Border :** None
- **Padding :** 12px 24px
- **Border-radius :** 8px
- **Font-size :** 16px
- **Font-weight :** 600
- **Hover :** Danger Dark (Red 600)
- **Focus :** Danger Darker (Red 800) + outline
- **Disabled :** Danger Light (Red 300)

### 6.4 Bouton Iconique (Icon)

- **Background :** Transparent
- **Text :** Secondary (Slate 500)
- **Border :** None
- **Padding :** 8px
- **Border-radius :** 8px
- **Font-size :** 16px
- **Font-weight :** 400
- **Hover :** Background (Slate 50)
- **Focus :** Background (Slate 100) + outline
- **Disabled :** Text Disabled (Slate 300)

### 6.5 Tailles de Boutons

#### Petit
- **Padding :** 8px 16px
- **Font-size :** 14px

#### Normal
- **Padding :** 12px 24px
- **Font-size :** 16px

#### Grand
- **Padding :** 16px 32px
- **Font-size :** 18px

## 7. Cartes

### 7.1 Carte Standard

- **Background :** White
- **Border :** 1px solid Border (Slate 200)
- **Border-radius :** 12px
- **Padding :** 24px
- **Shadow :** 0 1px 3px rgba(0,0,0,0.1)
- **Hover :** Shadow 0 4px 6px rgba(0,0,0,0.1)

### 7.2 Carte Elevée

- **Background :** White
- **Border :** None
- **Border-radius :** 12px
- **Padding :** 24px
- **Shadow :** 0 4px 6px rgba(0,0,0,0.1)
- **Hover :** Shadow 0 10px 15px rgba(0,0,0,0.1)

### 7.3 Carte Compacte

- **Background :** White
- **Border :** 1px solid Border (Slate 200)
- **Border-radius :** 8px
- **Padding :** 16px
- **Shadow :** None

## 8. Tableaux

### 8.1 Tableau Standard

- **Background :** White
- **Border :** 1px solid Border (Slate 200)
- **Border-radius :** 8px
- **Header Background :** Background (Slate 50)
- **Header Text :** Text Secondary (Slate 600)
- **Header Font-weight :** 600
- **Row Border :** 1px solid Border (Slate 200)
- **Row Hover :** Background (Slate 50)
- **Cell Padding :** 12px 16px
- **Cell Font-size :** 14px

### 8.2 États de Ligne

#### Sélectionné
- **Background :** Primary Light (Blue 100)

#### Erreur
- **Background :** Danger Light (Red 100)

#### Avertissement
- **Background :** Warning Light (Amber 100)

## 9. Formulaires

### 9.1 Champ de Texte (Input)

- **Background :** White
- **Border :** 1px solid Border (Slate 200)
- **Border-radius :** 8px
- **Padding :** 12px 16px
- **Font-size :** 16px
- **Text :** Text Principal (Slate 900)
- **Placeholder :** Text Tertiaire (Slate 400)
- **Hover :** Border Focus (Blue 500)
- **Focus :** Border Focus (Blue 500) + outline
- **Error :** Border Error (Red 500)
- **Disabled :** Background (Slate 50), Border Disabled (Slate 300)

### 9.2 Label

- **Font-size :** 14px
- **Font-weight :** 500
- **Color :** Text Secondary (Slate 600)
- **Margin-bottom :** 8px

### 9.3 Message d'Erreur

- **Font-size :** 12px
- **Font-weight :** 400
- **Color :** Danger (Red 500)
- **Margin-top :** 4px

### 9.4 Message d'Aide

- **Font-size :** 12px
- **Font-weight :** 400
- **Color :** Text Tertiaire (Slate 400)
- **Margin-top :** 4px

## 10. Modales

### 10.1 Modale Standard

- **Background :** White
- **Border-radius :** 16px
- **Padding :** 32px
- **Shadow :** 0 20px 25px rgba(0,0,0,0.15)
- **Max-width :** 600px
- **Overlay :** rgba(0,0,0,0.5)

### 10.2 En-tête de Modale

- **Font-size :** 20px
- **Font-weight :** 600
- **Color :** Text Principal (Slate 900)
- **Margin-bottom :** 16px

### 10.3 Corps de Modale

- **Font-size :** 16px
- **Font-weight :** 400
- **Color :** Text Secondary (Slate 600)
- **Margin-bottom :** 24px

### 10.4 Pied de Modale

- **Display :** Flex
- **Justify-content :** Flex-end
- **Gap :** 12px

## 11. Badges

### 11.1 Badge Success

- **Background :** Success Light (Emerald 100)
- **Text :** Success Dark (Emerald 800)
- **Padding :** 4px 12px
- **Border-radius :** 9999px
- **Font-size :** 12px
- **Font-weight :** 500

### 11.2 Badge Warning

- **Background :** Warning Light (Amber 100)
- **Text :** Warning Dark (Amber 800)
- **Padding :** 4px 12px
- **Border-radius :** 9999px
- **Font-size :** 12px
- **Font-weight :** 500

### 11.3 Badge Danger

- **Background :** Danger Light (Red 100)
- **Text :** Danger Dark (Red 800)
- **Padding :** 4px 12px
- **Border-radius :** 9999px
- **Font-size :** 12px
- **Font-weight :** 500

### 11.4 Badge Info

- **Background :** Info Light (Blue 100)
- **Text :** Info Dark (Blue 800)
- **Padding :** 4px 12px
- **Border-radius :** 9999px
- **Font-size :** 12px
- **Font-weight :** 500

### 11.5 Badge Neutral

- **Background :** Background (Slate 100)
- **Text :** Text Secondary (Slate 600)
- **Padding :** 4px 12px
- **Border-radius :** 9999px
- **Font-size :** 12px
- **Font-weight :** 500

## 12. Notifications

### 12.1 Notification Success

- **Background :** Success Light (Emerald 100)
- **Border :** 1px solid Success (Emerald 500)
- **Text :** Success Dark (Emerald 800)
- **Padding :** 12px 16px
- **Border-radius :** 8px
- **Shadow :** 0 2px 4px rgba(0,0,0,0.1)

### 12.2 Notification Error

- **Background :** Danger Light (Red 100)
- **Border :** 1px solid Danger (Red 500)
- **Text :** Danger Dark (Red 800)
- **Padding :** 12px 16px
- **Border-radius :** 8px
- **Shadow :** 0 2px 4px rgba(0,0,0,0.1)

### 12.3 Notification Warning

- **Background :** Warning Light (Amber 100)
- **Border :** 1px solid Warning (Amber 500)
- **Text :** Warning Dark (Amber 800)
- **Padding :** 12px 16px
- **Border-radius :** 8px
- **Shadow :** 0 2px 4px rgba(0,0,0,0.1)

### 12.4 Notification Info

- **Background :** Info Light (Blue 100)
- **Border :** 1px solid Info (Blue 500)
- **Text :** Info Dark (Blue 800)
- **Padding :** 12px 16px
- **Border-radius :** 8px
- **Shadow :** 0 2px 4px rgba(0,0,0,0.1)

## 13. Sidebar

### 13.1 Sidebar Standard

- **Background :** White
- **Border :** 1px solid Border (Slate 200)
- **Width :** 280px
- **Padding :** 24px 16px

### 13.2 Item de Sidebar

- **Padding :** 12px 16px
- **Border-radius :** 8px
- **Font-size :** 14px
- **Font-weight :** 500
- **Color :** Text Secondary (Slate 600)
- **Hover :** Background (Slate 50)
- **Active :** Background Primary Light (Blue 100), Color Primary (Blue 600)

## 14. Navbar

### 14.1 Navbar Standard

- **Background :** White
- **Border :** 1px solid Border (Slate 200)
- **Height :** 64px
- **Padding :** 0 24px
- **Shadow :** 0 1px 3px rgba(0,0,0,0.1)

### 14.2 Logo

- **Font-size :** 20px
- **Font-weight :** 700
- **Color :** Primary (Blue 600)

## 15. Responsive Design

### 15.1 Breakpoints

- **Mobile :** < 640px
- **Tablet :** 640px - 1024px
- **Desktop :** > 1024px

### 15.2 Adaptations

#### Mobile
- Sidebar : Menu hamburger
- Tableaux : Vue carte ou scroll horizontal
- Modales : Plein écran
- Grilles : 1 colonne

#### Tablet
- Sidebar : Rétractable
- Tableaux : Scroll horizontal si nécessaire
- Grilles : 2 colonnes

#### Desktop
- Sidebar : Fixe
- Tableaux : Normal
- Grilles : 3-4 colonnes

## 16. États

### 16.1 Hover

- **Boutons :** Background plus foncé
- **Liens :** Souligné
- **Cartes :** Ombre augmentée
- **Lignes de tableau :** Background (Slate 50)

### 16.2 Focus

- **Boutons :** Outline de 2px Primary (Blue 500)
- **Inputs :** Border Primary (Blue 500) + outline
- **Liens :** Outline de 2px Primary (Blue 500)

### 16.3 Disabled

- **Boutons :** Opacité 0.5, curseur not-allowed
- **Inputs :** Background (Slate 50), Border Disabled (Slate 300)
- **Liens :** Opacité 0.5, curseur not-allowed

### 16.4 Loading

- **Boutons :** Spinner, texte désactivé
- **Cards :** Skeleton loader
- **Tableaux :** Skeleton loader

### 16.5 Empty

- **Illustration :** Icône ou illustration
- **Text :** "Aucune donnée"
- **Color :** Text Tertiaire (Slate 400)

### 16.6 Error

- **Illustration :** Icône d'erreur
- **Text :** Message d'erreur
- **Color :** Danger (Red 500)
- **Action :** Bouton de réessayer

## 17. Accessibilité

### 17.1 Contraste

- **Texte normal :** Ratio minimum 4.5:1
- **Texte large :** Ratio minimum 3:1
- **Composants UI :** Ratio minimum 3:1

### 17.2 Focus Visible

- **Outline :** 2px Primary (Blue 500)
- **Offset :** 2px

### 17.3 Taille de Cible

- **Minimum :** 44x44px pour les éléments tactiles

### 17.4 Navigation Clavier

- **Tab :** Navigation séquentielle
- **Enter/Space :** Activation des boutons
- **Escape :** Fermeture des modales

## 18. Animations

### 18.1 Durées

- **Rapide :** 150ms
- **Normal :** 300ms
- **Lente :** 500ms

### 18.2 Easing

- **Ease-in :** Pour les entrées
- **Ease-out :** Pour les sorties
- **Ease-in-out :** Pour les transitions

### 18.3 Types

- **Fade :** Opacité
- **Slide :** Translation
- **Scale :** Échelle

## 19. Icônes

### 19.1 Bibliothèque

Utiliser une bibliothèque d'icônes cohérente, par exemple :
- Lucide Icons
- Heroicons
- Feather Icons

### 19.2 Taille

- **Petit :** 16px
- **Normal :** 20px
- **Grand :** 24px
- **Très grand :** 32px

### 19.3 Couleur

- **Par défaut :** Text Secondary (Slate 500)
- **Active :** Primary (Blue 600)
- **Hover :** Text Principal (Slate 900)

## 20. Ombres

### 20.1 Échelle d'Ombres

- **Small :** 0 1px 2px rgba(0,0,0,0.05)
- **Medium :** 0 1px 3px rgba(0,0,0,0.1)
- **Large :** 0 4px 6px rgba(0,0,0,0.1)
- **XLarge :** 0 10px 15px rgba(0,0,0,0.1)
- **XXLarge :** 0 20px 25px rgba(0,0,0,0.15)

## 21. Conclusion

Ce design system fournit une base cohérente pour le développement de l'interface de LabAccess. Il doit être respecté par tous les développeurs pour garantir une expérience utilisateur uniforme et professionnelle.

# PROMPT ANTIGRAVITY — Site Chrishein

## Contexte du projet
Chrishein est une entreprise béninoise basée à Cotonou spécialisée dans le shopping international assisté. Elle commande à la place de ses clients sur des plateformes comme SHEIN, Temu, Alibaba, Amazon, Fashion Nova, etc., et livre les produits au Bénin.

---

## Ce que tu dois construire
Un site web vitrine one-page moderne, en français, orienté conversion, pour Chrishein. Le site doit permettre aux visiteurs de comprendre rapidement le service et de passer à l'action (contact WhatsApp).

---

## Stack technique
- React + Next.js (App Router)
- Tailwind CSS
- Framer Motion pour les animations
- Google Fonts
- Pas de base de données, pas d'authentification

---

## Direction artistique
- **Palette** : Orange chaleureux (#E8621A) comme couleur principale, noir profond (#141210) pour les sections sombres, beige/crème (#F5F2EE) pour les sections claires
- **Typographie** : Fraunces (display, serif, pour les titres) + DM Sans (body)
- **Ambiance** : Luxe accessible, confiance, modernité africaine. Ni trop corporate ni trop cheap. Pense à une marque de livraison premium.
- **Pas de** : Illustrations génériques, icônes clipart, templates Bootstrap, gradients violets

---

## Structure de la page (dans cet ordre)

### 1. Navigation fixe
- Logo "Chrishein" (Fraunces, bold, avec le "hein" en orange)
- Liens : Comment ça marche · Tarifs · Plateformes · FAQ
- CTA : bouton "Commander maintenant" (pill, fond orange) → lien WhatsApp
- Fond blanc semi-transparent avec backdrop-blur au scroll

### 2. Section Hero
- **Layout** : 2 colonnes (texte gauche, visuel droite)
- **Fond** : Forme organique orange pâle en arrière-plan droit
- **H1** : "Le monde entier, livré chez vous au Bénin." (Fraunces, ~60px, -0.03em letter-spacing)
- **Sous-titre** : "Chrishein commande à votre place sur SHEIN, Temu, Alibaba, Amazon et bien d'autres — sans stress, sans frontières, sans mauvaises surprises."
- **CTA principal** : "Envoyer mon lien WhatsApp" (bouton noir, icône WhatsApp inline)
- **CTA secondaire** : "Voir comment ça marche →" (lien souligné)
- **Social proof** : 4 avatars empilés + "Des centaines de clients satisfaits à Cotonou"
- **Visuel droit** : 4 cartes flottantes animées (SHEIN 900 FCFA/$, Temu 1000 FCFA/€, Alibaba sur devis, Amazon 650 FCFA/$)

### 3. Bande de confiance (fond noir)
4 éléments horizontaux :
- ✓ Devis transparent avant chaque commande
- ⚡ 18 jours max pour SHEIN & Temu
- 🔒 Paiement sécurisé à validation du devis
- 📍 Livraison à Cotonou et partout au Bénin

### 4. Section "Comment ça marche" (fond beige)
- **Titre** : "Simple comme un message WhatsApp."
- Système d'onglets : "Vous avez un lien" / "Vous cherchez un produit"
- Pour chaque onglet : 5 étapes en grille horizontale avec numéros circulaires et ligne connectrice
- **Cas 1 (lien)** : Envoyez le lien → Recevez un devis → Validez & payez → Commande passée → Livraison
- **Cas 2 (recherche)** : Décrivez le produit → Chrishein cherche → Offre & devis → Validation → Livraison

### 5. Section Tarifs (fond blanc)
3 cartes tarifaires côte à côte :
- **SHEIN** : < 25$ → 900 FCFA/$ accessoires, 950 FCFA/$ vêtements. > 25$ → 670 FCFA/$ + 10 000 FCFA/kg frais expédition payables à l'arrivée
- **Temu** (carte featured, fond noir, bordure orange) : 1 000 FCFA/€ accessoires, 1 100 FCFA/€ vêtements (même tarif < et > 25$)
- **Alibaba** : 650 FCFA/$, transport aérien ou maritime selon volume/poids, frais calculés séparément

### 6. Section Plateformes (fond beige)
Mosaïque de tuiles :
- SHEIN (tuile large, fond orange pâle) — Mode, Beauté, Accessoires
- Temu, Alibaba, Amazon (tuiles normales)
- Fashion Nova, Aroma-Zone, Sites USA (tuiles normales)

### 7. Section Pourquoi Chrishein (fond noir)
- **Layout** : 2 colonnes (arguments gauche, témoignages droite)
- **4 arguments** : Transparence totale · Rapidité garantie · Accompagnement personnalisé · Options logistiques flexibles
- **2 témoignages** dans une carte sombre : Aminata F. (SHEIN) + Roland K. (Alibaba)

### 8. Section FAQ (fond blanc)
- **Layout** : 2 colonnes (titre + CTA gauche, accordéon FAQ droite)
- 6 questions :
  1. Comment envoyer mon lien à Chrishein ?
  2. Quels sont les délais de livraison ?
  3. Quand est-ce que je paie ?
  4. Que comprend exactement le devis ?
  5. Est-ce qu'on peut commander en gros (B2B) ?
  6. Vous proposez des produits "Made in USA" ?

### 9. CTA Final (fond orange pâle)
- **Titre** : "Votre prochain favori vous attend déjà en ligne."
- **Sous-titre** court
- Bouton WhatsApp vert + Bouton "Voir les tarifs" noir

### 10. Footer (fond noir)
- Logo + description courte
- Liens internes (Services · Contact)
- Ligne copyright

---

## Comportements & animations
- Navigation : apparaît avec backdrop-blur au scroll (sticky)
- Hero cards : animation staggered (floatIn) à l'entrée de page
- Sections : fade-in au scroll via Framer Motion (IntersectionObserver ou whileInView)
- FAQ : accordéon avec animation smooth (maxHeight transition)
- Tabs "Comment ça marche" : toggle JS simple
- Hover : toutes les cartes ont un translateY(-4px) + box-shadow au hover
- Boutons CTA : hover change la couleur + translateY(-2px)

---

## Données importantes à intégrer exactement

### Tarification SHEIN :
- Commande < 25$ : 900 FCFA/$ TTC accessoires, 950 FCFA/$ TTC vêtements/chaussures
- Commande > 25$ : 670 FCFA/$ + frais expédition 10 000 FCFA/kg (payables à l'arrivée)

### Tarification Temu :
- Toutes commandes : 1 000 FCFA/€ TTC accessoires, 1 100 FCFA/€ TTC vêtements/chaussures

### Tarification Alibaba :
- Taux de base : 650 FCFA/$
- Transport : aérien (rapide, plus cher) ou maritime (lent, économique pour gros volumes)
- Frais expédition calculés selon poids et CBM

### Tarification autres sites :
- Taux HT : 650 FCFA/$
- Frais d'expédition calculés séparément

### Délais :
- SHEIN & Temu : 18 jours maximum
- Alibaba : selon mode de transport

### Processus :
- Cas 1 (lien) : Envoi lien → Devis TTC → Validation + paiement → Commande → Livraison
- Cas 2 (recherche) : Description produit → Recherche → Offre + devis → Validation → Livraison

---

## Liens à utiliser
- WhatsApp CTA : https://wa.me/[NUMERO_CHRISHEIN] (à remplacer par le vrai numéro)
- Toutes les sections en ancres : #comment-ca-marche, #tarifs, #plateformes, #faq

---

## Notes importantes
- Tout le contenu est en français
- Mobile-first : le site doit être parfaitement responsive (breakpoints à 768px et 1024px)
- Sur mobile : navigation hamburger, hero en 1 colonne, grilles en 1 colonne
- Pas d'images réelles nécessaires (utiliser des emojis ou SVG simples pour les icônes)
- Polices depuis Google Fonts (Fraunces + DM Sans)
- Le numéro WhatsApp est un placeholder — le client le remplacera

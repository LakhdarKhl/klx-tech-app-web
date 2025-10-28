# Portfolio — LStar Solutions

Un site statique minimal pour présenter tes projets. Modifie `main.js` → tableau `projects` pour ajouter/éditer des cartes.

## Édition rapide
- `index.html` : texte de la page, liens, sections.
- `style.css` : thème sombre/clair, couleurs, grille, cartes.
- `main.js` : liste des projets (titre, description, tags, lien, image).

## Déploiement OVH (hébergement Web)
1. **OVHcloud Manager** → *Web Cloud* → **Hébergements** → choisis ton hébergement.
2. Onglet **Multisite** → *Ajouter un domaine* : `klxtech.com` et `www.klxtech.com` pointant vers le dossier `www` (ou `klxtech` si tu crées un sous-dossier).
3. Dans **FTP-SSH**, récupère le **serveur**, **utilisateur** et **mot de passe**. Connecte‑toi en **FTPS**.
4. Envoie tous les fichiers de ce projet dans le dossier cible (`www/`).
5. (Optionnel) Garde `.htaccess` pour forcer **HTTPS** et rediriger `www` → `klxtech.com`.
6. Vider le cache du navigateur, puis visite `https://klxtech.com`.

## Alternative GitHub Pages + OVH (DNS)
1. Crée un repo `klxtech-portfolio` avec ces fichiers. Active **GitHub Pages** (branche `main`, dossier `/`).
2. Dans le repo, crée un fichier `CNAME` contenant `klxtech.com`.
3. Chez **OVH**, DNS : `klxtech.com` → **ALIAS/CNAME** vers `yourusername.github.io` et `www` → CNAME idem.
4. Attends la propagation DNS (quelques minutes à quelques heures).

## Customiser
- Logo : remplace `assets/favicon.svg`.
- Image de couverture : `assets/cover.svg`.
- Images projet : remplace `assets/placeholder.svg` (ou mets tes propres PNG/JPG et mets à jour `main.js`).

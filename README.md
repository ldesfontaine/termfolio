# Portfolio — Lucas Desfontaine

Portfolio personnel DevSecOps & Sécurité des Infrastructures.

## Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **Tailwind CSS 4**
- **MDX** pour les write-ups projets
- **Docker** (multi-stage Node → Nginx Alpine)

## Quick Start

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build           # Static export → out/
docker build -t portfolio .
docker compose up -d
```

Le site est servi par Nginx Alpine derrière Traefik en reverse proxy.

## Structure

```
app/              # Pages (App Router)
components/       # Composants React
content/          # Contenu éditable (MDX, timeline, certifs)
lib/              # Types + utilitaires
public/           # Fichiers statiques (CV, images)
```

Ajouter un projet = créer un fichier `.mdx` dans `content/projects/`.

## Licence

Tous droits réservés.

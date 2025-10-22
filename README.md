# Vue.js Terminal Portfolio avec Docker

Ce projet Vue.js est configuré pour fonctionner dans un environnement Docker avec le hot reload pour le développement.

## Prérequis

- Docker
- Docker Compose

## Structure du projet

```
terminalPortfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   └── HelloWorld.vue
│   ├── App.vue
│   └── main.js
├── Dockerfile
├── docker-compose.yml
├── vue.config.js
└── package.json
```

## Démarrage du projet en mode développement

1. **Construire et démarrer le conteneur :**
   ```bash
   docker-compose up --build
   ```

2. **Accéder à l'application :**
   Ouvrir votre navigateur à l'adresse : `http://localhost:8080`

## Fonctionnalités du setup Docker

- **Hot Reload** : Les modifications de code sont automatiquement reflétées dans le navigateur
- **Volume monté** : Le code source est monté dans le conteneur
- **Variables d'environnement** : Configurées pour le polling des fichiers (nécessaire sur certains systèmes)

## Commandes utiles

- Démarrer en arrière-plan : `docker-compose up -d`
- Arrêter les conteneurs : `docker-compose down`
- Voir les logs : `docker-compose logs -f`
- Reconstruire : `docker-compose up --build`

## Développement

Modifiez les fichiers dans le dossier `src/` et les changements seront automatiquement pris en compte grâce au hot reload.

## Configuration

- **Port** : 8080 (modifiable dans docker-compose.yml)
- **Hot Reload** : Activé via les volumes montés et la configuration Vue.js
- **Polling** : Activé pour la compatibilité Windows/macOS

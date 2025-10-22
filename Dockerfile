# Dockerfile pour le développement Vue.js avec hot reload
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Installer Vue CLI globalement
RUN npm install -g @vue/cli

# Exposer le port 8080 pour le serveur de développement
EXPOSE 8080

# Commande par défaut pour démarrer le serveur de développement
CMD ["npm", "run", "serve"]

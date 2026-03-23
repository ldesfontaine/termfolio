# --- Stage 1 : Build ---
FROM node:20-alpine AS builder

WORKDIR /app

# Nettoie le cache npm avant l'install
RUN npm cache clean --force

# Copie package.json en premier pour profiter du cache Docker
COPY package*.json ./
RUN npm ci --silent

# Copie le reste des sources et build
COPY . .
RUN npx vue-cli-service build
# ou
# RUN /app/node_modules/.bin/vue-cli-service build

# --- Stage 2 : Serve ---
FROM nginx:alpine

# Supprime la config nginx par défaut
RUN rm -rf /usr/share/nginx/html/*

# Copie le build Vue depuis le stage précédent
COPY --from=builder /app/dist /usr/share/nginx/html

# Config nginx pour SPA (toutes les routes → index.html)
RUN printf 'server {\n\
    listen 80;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
    gzip on;\n\
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

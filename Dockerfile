# --- Stage 1 : Build ---
FROM node:20-alpine AS builder

# Configure le DNS pour le conteneur
RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf && \
    echo "nameserver 1.1.1.1" >> /etc/resolv.conf

WORKDIR /app

RUN npm cache clean --force

COPY package*.json ./
# Force npm à utiliser un registre spécifique
RUN npm config set registry=https://registry.npmjs.org/ && \
    npm ci --silent

COPY . .
# Force npx à utiliser le même registre
RUN npx --registry=https://registry.npmjs.org/ vue-cli-service build

# --- Stage 2 : Serve ---
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

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

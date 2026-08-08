# Build the Vite app
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve the built SPA with a tiny Node HTTP server that listens on Cloud Run's $PORT
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY deploy/server.mjs ./server.mjs
EXPOSE 8080
CMD ["node", "server.mjs"]

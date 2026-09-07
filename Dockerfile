FROM node:22-alpine AS app-build
WORKDIR /app
COPY package*.json ./
# Cloud Build has intermittently omitted Vite config dev dependencies even with --include=dev.
# Install from the lockfile first, then explicitly guarantee the two packages imported by vite.config.ts.
RUN npm ci --include=dev \
  && npm install --no-save --package-lock=false @vitejs/plugin-react@5.2.0 @tailwindcss/vite@4.1.14
COPY . .
RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=app-build /app/dist ./dist
COPY deploy/server.mjs ./server.mjs
EXPOSE 8080
CMD ["node", "server.mjs"]

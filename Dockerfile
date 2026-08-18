FROM node:22-alpine AS app-build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run validate:deploy

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=app-build /app/dist ./dist
COPY deploy/server.mjs ./server.mjs
EXPOSE 8080
CMD ["node", "server.mjs"]

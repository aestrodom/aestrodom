FROM node:20-alpine AS builder
WORKDIR /app

COPY web/package*.json ./web/
WORKDIR /app/web
RUN npm install

WORKDIR /app
COPY . .
WORKDIR /app/web
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app/web
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY --from=builder /app/web/package*.json ./
COPY --from=builder /app/web/node_modules ./node_modules
COPY --from=builder /app/web/.next ./.next
COPY --from=builder /app/web/public ./public
COPY --from=builder /app/web/next.config.mjs ./

EXPOSE 3000

CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "3000"]

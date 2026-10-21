FROM node:22-alpine
WORKDIR /app
COPY server.js package.json ./
COPY public ./public
ENV PORT=8080 TRUST_PROXY=1
EXPOSE 8080
VOLUME ["/app/data"]
CMD ["node", "server.js"]

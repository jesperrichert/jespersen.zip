FROM oven/bun:latest AS builder

COPY . . 
RUN bun install
RUN bun run build

FROM nginx:alpine-slim AS release

# COPY --from=builder ./dist/entry.html /usr/share/nginx/html/index.html
COPY --from=builder ./dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

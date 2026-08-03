FROM nginx:alpine-slim

COPY ./dist/ /usr/share/nginx/html/
COPY ./dist/entry.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
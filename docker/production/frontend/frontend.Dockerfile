# Stage 1
FROM node:22.0-bullseye AS build

WORKDIR /app

COPY ../../../frontend .

RUN npm install
RUN npm install -g nx

RUN nx build desktop && nx build mobile

# Stage 2
FROM nginx:1.27.1-alpine AS ngi

COPY docker/production/frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/apps /usr/share/nginx/html

VOLUME ["/etc/letsencrypt"]

CMD ["nginx", "-g", "daemon off;"]

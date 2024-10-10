# Stage 1
FROM node:22.0-bullseye AS build

WORKDIR /app

COPY package*.json .

RUN npm install
RUN npm install -g nx

COPY . .

RUN nx build desktop && nx build mobile

# Stage 2
FROM nginx:1.27.1-alpine

RUN apk add --no-cache nodejs npm

RUN npm install -g nx

COPY --from=build /app/dist/apps /usr/share/nginx/html

# Frontend Test Image
FROM build AS frontend-test

RUN npm install --only=dev

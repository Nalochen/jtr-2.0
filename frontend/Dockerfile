# Stage 1
FROM node:22.0-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install
RUN npm install -g nx

COPY . .

RUN nx build desktop && nx build mobile

# Stage 2
FROM nginx:1.27.1-alpine
COPY --from=build /app/dist/apps /usr/share/nginx/html

# Frontend Test Image
FROM node:22.0-slim AS frontend-test

WORKDIR /app

COPY package*.json .
COPY .npmrc .

RUN npm install
RUN npm install -g nx

COPY . .

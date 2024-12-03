# Stage 1
FROM node:22.0-bullseye AS build

WORKDIR /app

ADD ../../../frontend .
RUN ls

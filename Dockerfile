FROM node:21 as base

WORKDIR /app

COPY package*.json .

RUN npm install

FROM base as dev

COPY . .

FROM dev as prod
FROM node:16-alpine3.12 as builder

WORKDIR '/app'

COPY package*.json ./
RUN yarn install

COPY . .
RUN npm run build

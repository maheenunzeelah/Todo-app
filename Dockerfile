FROM node:16-alpine3.12 as builder

WORKDIR '/app'

COPY package*.json ./
RUN yarn install

COPY . .
EXPOSE 22
RUN npm run build

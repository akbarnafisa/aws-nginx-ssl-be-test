FROM node:18-alpine as builder

WORKDIR /main

COPY package.json .
COPY yarn.lock .

RUN yarn install --pure-lockfile --cache-folder ./yarncache; rm -rf ./yarncache; 

COPY app_1 app_1

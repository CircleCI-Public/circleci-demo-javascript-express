FROM node:8.3.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

ENV NODE_ENV production
RUN npm run clean && npm run build && npm run build:server

EXPOSE 8000
CMD ["npm", "run", "start:prod"]


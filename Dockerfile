FROM node:12.18.3-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm build

EXPOSE 3000

CMD [ "node", "dist/server.js" ]
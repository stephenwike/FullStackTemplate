#---------------BUILD
# docker build -t producer-javascript-build .

FROM node:latest

WORKDIR /app
COPY ./package*.json ./
COPY ./send.js ./

RUN npm install

CMD ["npm", "start"]
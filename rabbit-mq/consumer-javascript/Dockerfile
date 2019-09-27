#---------------BUILD
# docker build -t consumer-javascript-build .

FROM node:latest

WORKDIR /app
COPY . .

RUN npm install

CMD ["npm", "start"]
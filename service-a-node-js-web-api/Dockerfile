# ------------BUILD
# docker build -t service-a-build .
# ------------RUN
# docker run -p 8090:8090 --name service-a -h service-a -d service-a-build

FROM node:latest

# Create app directory
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build
WORKDIR /usr/app/build

EXPOSE 8090
ENTRYPOINT [ "npm", "start" ]
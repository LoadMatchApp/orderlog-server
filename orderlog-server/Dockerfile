FROM node:21

WORKDIR /orderlog-server
COPY package.json .
RUN npm install
COPY . .
CMD npm start
FROM node:16.17

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 6969

CMD ["npm", "start"]
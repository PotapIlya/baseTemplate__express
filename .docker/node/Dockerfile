FROM node:16


WORKDIR /home/app

#RUN npm i npm@latest -g

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]

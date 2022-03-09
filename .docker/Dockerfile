FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./

RUN npm install
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# копируем исходный код
COPY ../.. .

EXPOSE 8080
#CMD [ "node", "server.js" ]
CMD [ "npm", "start" ]

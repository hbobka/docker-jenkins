FROM node

WORKDIR /app

COPY package.json /app

RUN npm config set proxy http://proxy.mms-at-work.de:8080
RUN npm config set https-proxy http://proxy.mms-at-work.de:8080
RUN npm install

COPY . /app

EXPOSE 80

CMD ["node", "server.js"]

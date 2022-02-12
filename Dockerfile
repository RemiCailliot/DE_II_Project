FROM node:14

WORKDIR /app

COPY . .

RUN npm install
RUN npm install express
RUN npm install express-session

EXPOSE 3000

CMD [ "node", "app.js" ]
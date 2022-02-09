FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY ./frontend/ .

RUN npm install express
RUN npm install express-session
RUN npm install connect-mongo

EXPOSE 4000

CMD [ "node", "app.js" ]
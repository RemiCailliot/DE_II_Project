FROM node:14

RUN mkdir -p /app/

WORKDIR /app/

COPY ./backend/ .

CMD [ "mongod", "-f","./conf/mongodb.conf" ]
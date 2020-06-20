FROM node

LABEL maintainer="bruno.honda@live.com"

COPY . .

RUN npm install && \
    npm test -- --coverage && \
    npm run build

FROM node

COPY --from=0 ./dist/ /home/node/app
COPY --from=0 ./node_modules/ /home/node/node_modules/

EXPOSE 3333

WORKDIR /home/node/app

CMD [ "node", "server.js" ]
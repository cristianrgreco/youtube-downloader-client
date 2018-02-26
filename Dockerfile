FROM node:carbon

WORKDIR /usr/src/app

COPY . .

RUN yarn && \
    yarn build && \
    yarn global add serve

EXPOSE 5000

CMD serve -s --port 5000 build

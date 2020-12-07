FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

EXPOSE 3000

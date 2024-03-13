FROM node:19.7-slim as node

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine
EXPOSE 4200
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/build /usr/share/nginx/html
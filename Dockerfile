# build environment
FROM node:12.0.0 as build
WORKDIR /app
RUN npm install -g @angular/cli
COPY package.json /app/package.json
RUN npm cache verify && npm install
COPY . .
RUN ng build --prod

# production environment
FROM nginx:1.16.0-alpine-perl
COPY --from=build /app/dist/log-dashboard /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

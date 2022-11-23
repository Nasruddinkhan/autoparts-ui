FROM node:14.15.0 as build 
WORKDIR /autoparts-ui
COPY package*.json .
RUN npm i postinstall
RUN npm install
COPY . .
RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /autoparts-ui/build /usr/share/nginx/html
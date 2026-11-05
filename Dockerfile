FROM node:22-alpine AS dependencies

WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM dependencies AS build

COPY . .
RUN npm run check

FROM dependencies AS diagrams

RUN apk add --no-cache openjdk17-jre plantuml
COPY . .
CMD ["npm", "run", "render:diagrams"]

FROM nginx:1.29-alpine

COPY --from=build /app/.output/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# Этап сборки приложения
FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Этап запуска приложения
FROM node:alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm install -g serve
CMD ["serve", "-s", "dist"]
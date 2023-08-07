FROM node:16
RUN npm install http-server -g
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install
COPY . .
RUN npm run build:prod
EXPOSE 8080
CMD ["http-server", "dist"]


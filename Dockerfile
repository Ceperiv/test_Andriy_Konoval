FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install
COPY . .
RUN npm run build:prod
RUN npm install http-server -g
EXPOSE 8080
CMD ["http-server ", "dist/"]
#CMD ["node", "index.js"]

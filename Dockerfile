### Build ###
FROM node:18-alpine
WORKDIR  /src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### Run ###
EXPOSE 8080
CMD ["http-server", "-p", "8080"]

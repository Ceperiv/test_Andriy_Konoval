FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install
COPY . .
RUN npm run build
EXPOSE 10.0.0.3:8080
CMD ["npm", "start"]
#CMD ["node", "index.js"]

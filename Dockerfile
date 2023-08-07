FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@9.8.1
RUN npm install
COPY . .
#RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]

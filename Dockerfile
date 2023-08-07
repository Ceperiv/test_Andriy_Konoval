FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install
COPY . .
#RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]

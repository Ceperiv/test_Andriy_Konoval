FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest
COPY . .
#RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]

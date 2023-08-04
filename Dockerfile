# Stage 1: Build the Angular application
FROM node:14.17.0 AS build

WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular application
COPY . .

# Build the application
RUN npm run build --prod

# Stage 2: Create the production-ready image
FROM nginx:1.21.1

# Remove the default Nginx configuration
RUN rm -rf /etc/nginx/conf.d

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular application from the previous stage
COPY --from=build /app/dist/your-angular-app-name /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

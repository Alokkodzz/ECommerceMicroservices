# Stage 1: Build the React app
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire app to the container's working directory
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

# Copy the built React app from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom NGINX config file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port that NGINX will use
EXPOSE 80

# Run NGINX
CMD ["nginx", "-g", "daemon off;"]

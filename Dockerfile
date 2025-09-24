# Multi-stage Dockerfile for Vite + React app on Render.com
# 1) Build stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev=false

# Copy source
COPY . .

# Build the app (outputs to dist/ by default for Vite)
RUN npm run build

# 2) Runtime stage using NGINX
FROM nginx:1.27-alpine AS runtime

# Copy custom NGINX config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Static files served by nginx are read-only
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80 for Render
EXPOSE 80

# Healthcheck (optional but useful)
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/ || exit 1

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

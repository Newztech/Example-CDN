# ---- Build Stage ----
    FROM node:23.7-alpine3.20  AS builder

    # Set working directory
    WORKDIR /app
    
    # Copy package files
    COPY package*.json ./
    
    # Install dependencies with legacy peer deps
    RUN npm install --legacy-peer-deps
    
    # Copy source code
    COPY . .
    
    # Build the application
    RUN npm run build
    
    # ---- Production Stage ----
    FROM node:23.7-alpine3.20  AS production
    
    # Add curl for healthcheck
    RUN apk add --no-cache curl
    
    # Add non-root user for security
    RUN addgroup -S appgroup && adduser -S appuser -G appgroup
    
    # Set working directory
    WORKDIR /app
    
    # Copy package files
    COPY package*.json ./
    
    # Install only the serve package
    RUN npm install serve && \
        npm cache clean --force
    
    # Copy application files and set permissions
    COPY --from=builder --chown=appuser:appgroup /app/dist /app/dist
    COPY --from=builder --chown=appuser:appgroup /app/package*.json /app/
    
    # Ensure proper permissions
    RUN chown -R appuser:appgroup /app
    
    # Switch to non-root user
    USER appuser
    
    # Expose port
    EXPOSE 3000
    
    # Health check using curl
    HEALTHCHECK --interval=30s --timeout=3s \
        CMD curl -f http://localhost:3000/health || exit 1
    
    # Start the application
    CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
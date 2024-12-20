# official node base Image
FROM node:22-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy code
COPY . .

# Expose the server port
EXPOSE 4000

# Start the GraphQL server
CMD ["npm", "start"]
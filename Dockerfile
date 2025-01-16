FROM node:20-alpine

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json first to leverage Docker cache for dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Install 'serve' to serve the build folder
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5173

# Serve the static build files
CMD ["serve", "-s", "dist", "-l", "5173"]

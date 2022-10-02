#Pull latest official node image
FROM node:latest

# Expose ports
EXPOSE 3000
EXPOSE 35729

# Environment variables
ENV PROJECT_DIR /app

# Set working directory
WORKDIR ${PROJECT_DIR}

# Add ${PROJECT_DIR}/node_modules/.bin to environment variables
ENV PATH ${PROJECT_DIR}/node_modules/.bin:$PATH

# Copy package files and install app dependencies
COPY package.json ${PROJECT_DIR}/package.json
COPY package-lock.json ${PROJECT_DIR}/package-lock.json
RUN npm install
RUN npm install react-scripts -g

# Add React app to working directory
ADD . ${PROJECT_DIR}

# Start the React app
CMD ["npm", "start"]
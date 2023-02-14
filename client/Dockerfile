# Create image based on the official Node image from dockerhub
FROM node:lts-buster

# Create app directory
WORKDIR /opt/mern-stack

# Copy dependency definitions
COPY package.json /opt/mern-stack
COPY yarn.lock /opt/mern-stack

# Install dependecies
RUN yarn install --no-progress
#RUN npm set progress=false \
#    && npm config set depth 0 \
#    && npm i install
# RUN npm ci

# Get all the code needed to run the app
# COPY . /usr/src/app

# Expose the port the app runs in
# EXPOSE 3000

# Serve the app
CMD ["yarn", "start"]
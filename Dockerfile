# Stage 1

# Use official node image as the base image
FROM node:18-alpine AS build
# Set the working directory
WORKDIR /usr/src/app
# Add the source code to app
COPY ./ /usr/src/app
# Install all the dependencires
RUN npm install
# Generate the build of the app
RUN npm run build

# Stage 2

# Use official nginx image as the base image
FROM nginx:1.17.1-alpine
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy the build output to replace the default nginx contents
COPY --from=build /usr/src/app/dist/angular-project-structure /usr/share/nginx/html
# Container run nginx with global directives and daemon off
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
# Expose port 80
EXPOSE 80

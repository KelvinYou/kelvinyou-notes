# Containerizing a NestJS App with Docker

Docker is a popular platform for building, shipping, and running applications in containers. Containerizing your NestJS application can simplify deployment, improve portability, and ensure consistent behavior across different environments. Here's a step-by-step guide on how to containerize a NestJS app with Docker.

## Prerequisites

- NestJS app
- Docker installed on your machine

## Step 1: Create a Dockerfile

In the root directory of your NestJS project, create a new file named `Dockerfile` with the following content:

```dockerfile
# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the port your NestJS app listens on (replace 3000 with your port)
EXPOSE 3000

# Start the NestJS app
CMD ["npm", "run", "start:prod"]
```

This `Dockerfile` uses the official Node.js image as the base image, copies the project files, installs dependencies, builds the NestJS app, and finally runs the app in production mode.

## Step 2: Build the Docker Image

In the same directory as the `Dockerfile`, open a terminal and run the following command to build the Docker image:

```bash
docker build -t my-nestjs-app .
```

Replace `my-nestjs-app` with a name of your choice for the Docker image.

## Step 3: Run the Docker Container

After the image is built successfully, you can run a Docker container based on the image:

```bash
docker run -p 3000:3000 my-nestjs-app
```

This command maps the container's port `3000` (or the port your NestJS app listens on) to the host's port `3000`. You can replace `3000` with your desired port if needed.

## Step 4: Access the NestJS App

Once the container is running, you should be able to access your NestJS app at `http://localhost:3000` (or the port you mapped in the previous step).

## Additional Configurations

### Environment Variables

If your NestJS app requires environment variables, you can pass them to the Docker container using the `-e` or `--env` flag:

```bash
docker run -p 3000:3000 -e APP_ENV=production my-nestjs-app
```

### Persistent Data

If your NestJS app uses a database or needs to store persistent data, you can mount a volume to the container:

```bash
docker run -p 3000:3000 -v /path/to/data:/app/data my-nestjs-app
```

Replace `/path/to/data` with the path to the directory you want to mount on your host machine, and `/app/data` with the path inside the container where the data should be stored.

## Conclusion

By following these steps, you've successfully containerized your NestJS application with Docker. This approach simplifies deployment, ensures consistent behavior across environments, and makes it easier to scale your application as needed.
# Docker

# Docker - Introduction

## 1. What is Docker?
- Docker is an open-source platform for building, deploying, and running applications in containers.
- Containers are lightweight, standalone, executable packages of software that include everything needed to run an application.

## 2. Benefits of Docker:
- **Portability**: Containers can run consistently across different environments (dev, staging, prod) and platforms (Linux, Windows, etc.).
- **Isolation**: Containers are isolated from each other and from the host system, ensuring better security and resource utilization.
- **Efficiency**: Containers are lightweight and share the host's OS kernel, resulting in efficient resource usage and fast startup times.
- **Consistency**: Docker containers encapsulate the application and its dependencies, ensuring consistent behavior across different environments.

## 3. Docker Architecture:
- **Docker Engine**: The core component that manages Docker containers, images, networks, and volumes.
- **Docker Client**: The command-line interface (CLI) or API used to interact with the Docker Engine.
- **Docker Registry**: A service for storing and distributing Docker images.
- **Docker Objects**:
  - **Images**: Read-only templates used to create containers.
  - **Containers**: Running instances of Docker images.
  - **Networks**: Virtual networks that connect Docker containers.
  - **Volumes**: Persistent data storage for containers.

## 4. Docker Workflow:
1. Build an image from a Dockerfile (text file with instructions).
2. Push the image to a registry (e.g., Docker Hub, private registry).
3. Pull the image from the registry.
4. Create and run a container from the image.

## 5. Basic Docker Commands:
- `docker build`: Build an image from a Dockerfile.
- `docker pull`: Pull an image from a registry.
- `docker run`: Create and start a new container from an image.
- `docker ps`: List running containers.
- `docker stop`: Stop a running container.
- `docker rm`: Remove a stopped container.
- `docker images`: List available images.
- `docker rmi`: Remove an image.

## 6. Use Cases:
- Consistent development and deployment environments.
- Microservices architecture and application modernization.
- Continuous Integration and Continuous Deployment (CI/CD) pipelines.
- Multi-cloud and hybrid cloud environments.
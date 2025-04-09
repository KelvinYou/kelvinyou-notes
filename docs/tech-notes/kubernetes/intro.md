# Kubernetes

# Kubernetes Introduction

## 1. What is Kubernetes?
- Kubernetes (K8s) is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.
- It was originally developed by Google and later donated to the Cloud Native Computing Foundation (CNCF).

## 2. Key Features of Kubernetes:
- **Automatic Deployment and Rollback**: Kubernetes can automatically deploy and rollback applications with zero downtime.
- **Service Discovery and Load Balancing**: It provides service discovery and load balancing across containerized applications.
- **Storage Orchestration**: Kubernetes allows mounting of storage systems to containers in a seamless manner.
- **Self-Healing**: It automatically restarts failed containers and reschedules them on healthy nodes.
- **Auto-Scaling**: Kubernetes can automatically scale containerized applications based on CPU and memory utilization.
- **Declarative Configuration**: The desired state of the system is defined using YAML configurations.

## 3. Kubernetes Architecture:
- **Node**: A worker machine that runs containerized applications.
- **Pod**: The smallest deployable unit, consisting of one or more containers sharing resources.
- **Service**: An abstraction that defines a logical set of Pods and enables external traffic exposure.
- **Cluster**: A set of nodes that run containerized applications managed by Kubernetes.
- **Control Plane**: The core component that manages the Kubernetes cluster (API Server, Scheduler, Controller Manager, etcd).

## 4. Kubernetes Objects:
- **Deployment**: Defines the desired state of an application and manages its rollout.
- **Service**: Provides a stable endpoint for Pods and load balancing.
- **ConfigMap**: Stores configuration data as key-value pairs.
- **Secret**: Stores sensitive data like passwords, tokens, and keys.
- **Ingress**: Manages external access to services in a cluster.

## 5. Getting Started with Kubernetes:
- Install a Kubernetes cluster (e.g., Minikube for local development, cloud-managed services).
- Use the `kubectl` command-line tool to interact with the cluster.
- Define your application's desired state in YAML configuration files.
- Apply the configurations using `kubectl apply`.
- Monitor the cluster and application state using `kubectl get` and `kubectl describe`.

## 6. Use Cases:
- Deploying and managing microservices-based applications.
- Building and scaling containerized applications in the cloud or on-premises.
- Automating deployment, scaling, and management of applications.
- Enabling DevOps practices and Continuous Integration/Continuous Deployment (CI/CD) pipelines.
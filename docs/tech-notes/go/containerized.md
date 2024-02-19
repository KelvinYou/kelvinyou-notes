# Go - Containerized

## Containerized Go App

### Prerequisites

- Go installed on your machine. You can download it from [Golang](https://go.dev).
- Docker installed on your machine

### Step 1: Initialize the Project

Create a new directory for your project and initialize a Go module:

```bash
mkdir containerized-go-app
cd containerized-go-app
go mod init containerized-go-app

```

### Step 2: Write Your Go Application

Create a main.go file with a simple Go application:

```go
package main

import "log"

func main() {
	log.Println("Hello world")
}
```

### Step 3: Create a dockerfile

Create a Dockerfile in the project directory with the following content:

```dockerfile
FROM golang:1.21.5

WORKDIR /app

COPY go.mod .
COPY main.go .

# Build the Go application
RUN go build -o bin .

# Set the entry point
ENTRYPOINT [ "/app/bin" ]
```

### Step 4: Build and Run the Docker Image

Open docker

Build the Docker image using the following command

```bash
docker build . -t go-containerized:latest
```

```bash
docker image ls | grep go-containerized
```

Run the Docker container:

```bash
docker run go-containerized:latest
```

### Step 5: Adding a Router (Optional)

add `go get`, this is use to get all the packages inside `go.mod`

```dockerfile
FROM golang:1.21.5

WORKDIR /app

COPY go.mod .
COPY main.go .

# highlight-next-line
RUN go get
RUN go build -o bin .

ENTRYPOINT [ "/app/bin" ]
```

If you want to create a Go web server using a router, you can use a library like Gin. Here's how to modify your `main.go` file to include Gin:

```go
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// Create a new Gin router
	r := gin.Default()

	// Define routes
	r.GET("/hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Hello, World!"})
	})

	// Start the server
	r.Run(":8080")
}

```

```bash
docker build . -t go-containerized-api:latest
```

```bash
docker run -e POST=8080 -p 8080:8080 go-containerized-api:latest
```

Build and run the Docker image as before, and your Go web server with Gin should be accessible at http://localhost:8080/hello.
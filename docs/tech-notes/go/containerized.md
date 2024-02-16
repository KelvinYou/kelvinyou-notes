# Go - Containerized

## Containerized Go App

### Prerequisites

- Go installed on your machine. You can download it from [Golang](https://go.dev).
- Docker installed on your machine

### Step 1: Initialize

```bash
kelvinyoukokeng@Kelvins-Mac-mini go-practice % mkdir 3-containerized-go-app
kelvinyoukokeng@Kelvins-Mac-mini go-practice % cd 3-containerized-go-app 
kelvinyoukokeng@Kelvins-Mac-mini 3-containerized-go-app % go mod init 3-containerized-go-app
```

### Step 2: Create main.go

```go
package main

import "log"

func main() {
	log.Println("Hello world")
}
```

## Step 3: Create dockerfile

```dockerfile
FROM golang:1.21.5

WORKDIR /app

COPY go.mod .
COPY main.go .

RUN go build -o bin .

ENTRYPOINT [ "/app/bin" ]
```

Open docker

Build

```bash
docker build . -t go-containerized:latest
```



```bash
docker image ls | grep go-containerized
```

Run it and will see the result

```bash
docker run go-containerized:latest
```

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

### With router

main.go

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


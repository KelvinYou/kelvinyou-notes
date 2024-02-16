# Go - Gin

## Quick Start: Building a Web Server with Gin

This guide will walk you through the process of setting up a basic web server using the Gin framework in Go.

### Prerequisites

Go installed on your machine. You can download it from [Golang](https://go.dev).
<br/>Basic understanding of Go programming language.

### Step 1: Initial with install Gin

Initialize and install the Gin framework using `go get`:

```bash
mkdir <module_name>
cd <module_name>
go mod init <module_name>
go get -u github.com/gin-gonic/gin
```

### Step 2: Create a New Go File

Create a new Go file (e.g., main.go) and import the Gin package:

```go
package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
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

### Step 3: Build and Run

Build and run your web server:

Debug
```bash
go run main.go
```

Build
```bash
go build
./<your_executable_name>

# example
go build -o mywebserver
./mywebserver
```

### Step 4: Test Your Server

url 
```
http://localhost:8080/hello
```

#### Example

```
curl http://localhost:8080/hello
```

You should see the response
```json
{"message":"Hello, World!"}.
```
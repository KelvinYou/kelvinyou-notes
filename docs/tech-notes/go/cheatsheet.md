# Go - Cheat Sheet

https://devhints.io/go

:::note For myself
To continue:
1. Flow control
2. Functions
3. Concurrency
4. Error Control
5. Structs
6. Methods
6. Interfaces
7. References

:::

## Basic Types & Variables


```go
// Variable declaration
var msg string
var msg = "Hello, world!"
var msg string = "Hello, world!"
var x, y int
var x, y int = 1, 2
var x, msg = 1, "Hello, world!"
msg = "Hello"

// Declaration list
var (
  x int
  y = 20
  z int = 30
  d, e = 40, "Hello"
  f, g string
)

// Shortcut of above (Infers type)
msg := "Hello"
x, msg := 1, "Hello"

```

### Strings

```go
str := "Hello"
str2 := `Multiline
string`

// Strings are of type string.
```

### Numbers

```go
// Typical types
num := 3          // int
num := 3.         // float64
num := 3 + 4i     // complex128
num := byte('a')  // byte (alias for uint8)

// Other types
var u uint = 7        // uint (unsigned)
var p float32 = 22.7  // 32-bit float

```

### Arrays

```go
// var numbers [5]int
numbers := [...]int{0, 0, 0, 0, 0}

// Arrays have a fixed size.
```

### Slices

```go
slice := []int{2, 3, 4}
slice2 := []byte("Hello")

// Slices have a dynamic size, unlike arrays.
```


### Pointers

```go
func main () {
  b := *getPointer()
  fmt.Println("Value is", b)
}
 
func getPointer () (myPointer *int) {
  a := 234
  return &a
}
 
a := new(int)
*a = 234
```

- Pointers point to a memory location of a variable. Go is fully garbage-collected.
- See: [Pointers](https://go.dev/tour/moretypes/1)






## Hello world

```go
// File: hello.go

package main

import "fmt"

func main() {
  message := greetMe("world")
  fmt.Println(message)
}

func greetMe(name string) string {
  return "Hello, " + name + "!"
}
```

```shell
$ go run hello.go
```


## Constants

```go
const Phi = 1.618
const Size int64 = 1024
const x, y = 1, 2
const (
  Pi = 3.14
  E  = 2.718
)
const (
  Sunday = iota
  Monday
  Tuesday
  Wednesday
  Thursday
  Friday
  Saturday
)

// It then uses the `iota` identifier to tell the Go compiler you want the first value to start at 0, and then increment by 1 for each following constant
```
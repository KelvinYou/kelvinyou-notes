# Go - Cheat Sheet

## Debug

```go
import "log"

log.Println("debug");
```

<details>

<summary>Why should I use log.Println instead of fmt.Println?</summary>

Two things are different:

* Printing via package log is safe from concurrent goroutines (while plain fmt isn't)
* Log can add timing information automatically.

So these are two completely different things. log is for logging and fmt for formatting. (Okay, log uses the same verbs and flags, but that is just convenient).

Reference: 
https://stackoverflow.com/questions/19646889/why-should-i-use-log-println-instead-of-fmt-println

</details>


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
str3 := "Multiline \nstring"
str3 := "Multiline" + " " + "string"
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


### Type Conversions

```go
i := 2
f := float64(i)
u := uint(i)
```

- See: [Type conversions](https://go.dev/tour/basics/13)

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

### Go casting
```go
package main

import (
    "fmt"
)

func main() {
    var num1 int32 = 10
    var num2 int64

    num2 = int64(num1)

    fmt.Println("num1: ", num1)
    fmt.Println("num2: ", num2)
}
```

## Flow Control

### Conditional

```go
if day == "sunday" || day == "saturday" {
  rest()
} else if day == "monday" && isTired() {
  groan()
} else {
  work()
}
```

- See: [If](https://go.dev/tour/flowcontrol/5)

### Statements in if

```go
if _, err := doThing(); err != nil {
  fmt.Println("Uh oh")
}
```

- A condition in an if statement can be preceded with a statement before a ;. Variables declared by the statement are only in scope until the end of the if.
- See: [If with a short statement](https://go.dev/tour/flowcontrol/6)

### Switch

```go
switch day {
  case "sunday":
    // cases don't "fall through" by default!
    fallthrough

  case "saturday":
    rest()

  default:
    work()
}
```

- See: [Switch](https://go.dev/wiki/Switch)

### For loop

```go
for count := 0; count <= 10; count++ {
  fmt.Println("My counter is at", count)
}
```

- See: [For loops](https://go.dev/tour/flowcontrol/1)

### For-Range loop

```go
entry := []string{"Jack","John","Jones"}
for i, val := range entry {
  fmt.Printf("At position %d, the character %s is present\n", i, val)
}
```

- See: [For-Range loops](https://gobyexample.com/range)

### While loop

```go
n := 0
x := 42
for n != x {
  n := guess()
}
```

See: [Go’s “while”](https://go.dev/tour/flowcontrol/3)



## Functions

### Lambdas

```go
myfunc := func() bool {
  return x > 10000
}
```

- Functions are first class objects.

### Multiple return types

```go
a, b := getMessage()
func getMessage() (a string, b string) {
  return "Hello", "World"
}
```

### Named return values

```go
func split(sum int) (x, y int) {
  x = sum * 4 / 9
  y = sum - x
  return
}

```

- By defining the return value names in the signature, a return (no args) will return variables with those names.
- See: [Named return values](https://go.dev/tour/basics/7)

## Packages

### Importing

```go
import "fmt"
import "math/rand"

// OR

import (
  "fmt"        // gives fmt.Println
  "math/rand"  // gives rand.Intn
)

// Both are the same.
```

- See: [Importing](https://go.dev/tour/basics/1)


### Aliases

```go
import r "math/rand"

...
r.Intn()
```

### Packages

```go
package hello
```

- Every package file has to start with package.

### Exporting names

```go
func Hello () {
  ···
}
```

- Exported names begin with capital letters.
- See: [Exported names](https://go.dev/tour/basics/3)

## Concurrency

### Goroutines

```go
func main() {
  // A "channel"
  ch := make(chan string)

  // Start concurrent routines
  go push("Moe", ch)
  go push("Larry", ch)
  go push("Curly", ch)

  // Read 3 results
  // (Since our goroutines are concurrent,
  // the order isn't guaranteed!)
  fmt.Println(<-ch, <-ch, <-ch)
}
 
func push(name string, ch chan string) {
  msg := "Hey, " + name
  ch <- msg
}
```

- Channels are concurrency-safe communication objects, used in goroutines.
- See: [Goroutines](https://go.dev/tour/concurrency/1), [Channels](https://go.dev/tour/concurrency/2)


### Buffered Channels

```go
ch := make(chan int, 2)
ch <- 1
ch <- 2
ch <- 3
// fatal error:
// all goroutines are asleep - deadlock!
```

- Buffered channels limit the amount of messages it can keep.
- See: [Buffered channels](https://go.dev/tour/concurrency/3)

### Closing Channels

```go
// Closes a channel
ch <- 1
ch <- 2
ch <- 3
close(ch)

// Iterates across a channel until its closed
for i := range ch {
  ···
}

// Closed if ok == false
v, ok := <- ch
```

- See: [Range and close](https://go.dev/tour/concurrency/4)

### WaitGroup

```go
import "sync"

func main() {
  var wg sync.WaitGroup
  
  for _, item := range itemList {
    // Increment WaitGroup Counter
    wg.Add(1)
    go doOperation(&wg, item)
  }
  // Wait for goroutines to finish
  wg.Wait()
  
}
 
func doOperation(wg *sync.WaitGroup, item string) {
  defer wg.Done()
  // do operation on item
  // ...
}

```

- A WaitGroup waits for a collection of goroutines to finish. The main goroutine calls Add to set the number of goroutines to wait for. The goroutine calls wg.Done() when it finishes. 
- See: [WaitGroup](https://pkg.go.dev/sync#WaitGroup)

## Error Control

### Defer

```go
func main() {
  defer fmt.Println("Done")
  fmt.Println("Working...")
}

```

- Defers running a function until the surrounding function returns. The arguments are evaluated immediately, but the function call is not ran until later.
- See: [Defer, panic and recover](https://go.dev/blog/defer-panic-and-recover)

### Deferring functions

```go
func main() {
  defer func() {
    fmt.Println("Done")
  }()
  fmt.Println("Working...")
}
// Lambdas are better suited for defer blocks.

func main() {
  var d = int64(0)
  defer func(d *int64) {
    fmt.Printf("& %v Unix Sec\n", *d)
  }(&d)
  fmt.Print("Done ")
  d = time.Now().Unix()
}
// The defer func uses current value of d, unless we use a pointer to get final value at end of main.
```

## Structs

### Defining

```go
type Vertex struct {
  X int
  Y int
}
 
func main() {
  v := Vertex{1, 2}
  v.X = 4
  fmt.Println(v.X, v.Y)
}
```

- See: [Structs](https://go.dev/tour/moretypes/2)

### Literals

```go
v := Vertex{X: 1, Y: 2}

// Field names can be omitted (省略)
v := Vertex{1, 2}

// Y is implicit (隐含的)
v := Vertex{X: 1}
```

- You can also put field names.

### Pointers to structs

```go
v := &Vertex{1, 2}
v.X = 2
```

- Doing v.X is the same as doing (*v).X, when v is a pointer.


## Methods

### Receivers

```go
type Vertex struct {
  X, Y float64
}

func (v Vertex) Abs() float64 {
  return math.Sqrt(v.X * v.X + v.Y * v.Y)
}
```

- There are no classes, but you can define functions with receivers.
- See: [Methods](https://go.dev/tour/methods/1)

### Mutation

```go
func (v *Vertex) Scale(f float64) {
  v.X = v.X * f
  v.Y = v.Y * f
}
 
v := Vertex{6, 12}
v.Scale(0.5)
// `v` is updated
```

- By defining your receiver as a pointer (*Vertex), you can do mutations.
- See: [Pointer receivers](https://go.dev/tour/methods/4)

## Interfaces

### A basic interface

```go
type Shape interface {
  Area() float64
  Perimeter() float64
}
```

### Struct

```go
type Rectangle struct {
  Length, Width float64
}
```

- Struct `Rectangle` implicitly implements interface Shape by implementing all of its methods.

### Methods

```go
func (r Rectangle) Area() float64 {
  return r.Length * r.Width
}

func (r Rectangle) Perimeter() float64 {
  return 2 * (r.Length + r.Width)
}
```

- The methods defined in `Shape` are implemented in `Rectangle`.

### Interface example

```go
func main() {
  var r Shape = Rectangle{Length: 3, Width: 4}
  fmt.Printf("Type of r: %T, Area: %v, Perimeter: %v.", r, r.Area(), r.Perimeter())
}
```

## References

https://devhints.io/go


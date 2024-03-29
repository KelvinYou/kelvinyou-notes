# Java - Cheat Sheet

## Java Programming Terminologies

- JVM (Java Virtual Machine):  executes the bytecode generated by the compiler.
- Bytecode: The Javac compiler of JDK compiles the Java source code into bytecode so that it can be executed by JVM.
- JDK (Java Development Kit): It is a complete Java development kit that includes everything including compiler, Java Runtime Environment (JRE), java debuggers, java docs, etc.
- JRE (Java Runtime Environment): allows the Java program to run, however, we cannot compile it.
- Garbage Collector: To delete or recollect that memory JVM has a program called Garbage Collector.
- Finalize method: this function is triggered by the garbage collector just before an object is deleted or destroyed.

## Java Basic Types and Variables

### Primitive Data Types

Let’s start off by learning the primitive data types that Java offers:

| Data Type | Size  | Range                                                   |
| --------- | ----- | ------------------------------------------------------- |
| _byte_    | 8     | -128..127                                               |
| _short_   | 16    | -32,768..32,767                                         |
| _int_     | 32    | -2,147,483,648.. 2,147,483,647                          |
| _long_    | 64    | -9,223,372,036,854,775,808.. 9,223,372,036,854,775,807  |
| _float_   | 32    | 3.4e-0.38.. 3.4e+0.38                                   |
| _double_  | 64    | 1.7e-308.. 1.7e+308                                     |
| _char_    | 16    | Complete Unicode Character Set                          |
| _Boolean_ | 1     | True, False                                             |

### String

```java
String str1 = “Welcome”; // Using literal

String str2 = new String(”Edureka”); // Using new keyword
```

The java.lang.String class implements Serializable, Comparable and CharSequence interfaces. Since the String object is immutable in nature Java provides two utility classes:

1. StringBuffer: It is a mutable class that is thread-safe and synchronized.
1. StringBuilder: It is a mutable class that is not thread-safe but is faster and is used in a single threaded environment. 


## Flow Control

### Selection statements

```java
// if statement
if (condition) {expression} 

// if-else statement
if (condition) {expression} else {expression} 

// switch statement
switch (var) 
{ case 1: expression; break; default: expression; break; } 
```

### Iterative statements

```java
// for loop
for (condition) {expression}

// for each loop
for (int i: someArray) {}  

// while loop
while (condition) {expression} 

// do while loop
do {expression} while(condition)
```








##




## Reference

https://www.geeksforgeeks.org/java-cheat-sheet/#java-programming-terminologies
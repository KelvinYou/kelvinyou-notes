# Type vs Interface

In TypeScript, **`type` and `interface`** are both used to define custom types, but they have some key differences in usage and flexibility.  

---

## **1. Key Differences Between `type` and `interface`**

| Feature | `type` | `interface` |
|---------|--------|------------|
| **Usage** | Defines aliases for any type (primitive, object, union, tuple, etc.). | Defines the shape of an object. |
| **Extending** | Can use intersection (`&`) to combine multiple types. | Can use `extends` to inherit properties. |
| **Merging** | Cannot be merged when declared multiple times. | Supports declaration merging (multiple declarations merge automatically). |
| **Objects & Classes** | Can describe objects, functions, and primitives. | Primarily used for objects and classes. |
| **Performance** | Slightly slower in compilation. | More optimized for performance. |

---

## **2. Examples**
### **(1) Defining an Object Type**
#### **Using `interface`**
```ts
interface User {
  name: string;
  age: number;
}
```
#### **Using `type`**
```ts
type User = {
  name: string;
  age: number;
};
```
👉 **For defining objects, both `type` and `interface` work the same.**

---

### **(2) Extending**
#### **Using `interface` (extends)**
```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  role: string;
}
```
#### **Using `type` (intersection `&`)**
```ts
type Person = {
  name: string;
};

type Employee = Person & {
  role: string;
};
```
👉 Both approaches work, but `interface` has built-in `extends`, while `type` uses `&`.

---

### **(3) Declaration Merging**
#### **`interface` Supports Merging**
```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = { name: "Alice", age: 25 }; // Works!
```
#### **`type` Does Not Support Merging**
```ts
type User = {
  name: string;
};

type User = {
  age: number;
}; // ❌ Error: Duplicate identifier 'User'
```
👉 **If you need automatic merging, use `interface`.**

---

### **(4) Defining Functions**
#### **Using `interface`**
```ts
interface Add {
  (a: number, b: number): number;
}
const add: Add = (x, y) => x + y;
```
#### **Using `type`**
```ts
type Add = (a: number, b: number) => number;
const add: Add = (x, y) => x + y;
```
👉 **For functions, `type` is more concise.**

---

### **(5) Union Types (Only `type` Supports This)**
```ts
type ID = string | number;
let userId: ID = 123;  // ✅ Works
userId = "abc";  // ✅ Works
```
👉 **`interface` cannot define union types; use `type` instead.**

---

## **3. When to Use What?**
✅ **Use `interface` when**:
- Defining object shapes.
- Using class-based OOP.
- Taking advantage of declaration merging.

✅ **Use `type` when**:
- Defining primitives, unions, or tuples.
- Creating function signatures.
- Using advanced type compositions.

Would you like a real-world example based on your projects?
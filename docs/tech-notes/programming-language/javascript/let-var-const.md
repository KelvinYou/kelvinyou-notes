# Let vs Var vs Const

在 JavaScript 中，`let`、`var` 和 `const` 用于声明变量，它们的主要区别体现在 **作用域（scope）、可变性（mutability）和提升（hoisting）** 方面。  

---

## 1. **作用域（Scope）**
- **`var`**：**函数作用域**（Function Scope）
- **`let` 和 `const`**：**块级作用域**（Block Scope）

```js
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (var 作用域是整个函数)
}

function testLet() {
  if (true) {
    let y = 10;
  }
  console.log(y); // ❌ ReferenceError: y is not defined
}

testVar();
testLet();
```
- `var` 声明的变量在函数内部的任何地方都能访问。
- `let` 和 `const` 只在 `{}` 代码块内有效。

---

## 2. **可变性（Mutability）**
- **`var` 和 `let`** 可以重新赋值（mutable）。
- **`const`** 不能重新赋值（immutable）。

```js
let a = 10;
a = 20; // ✅ 允许修改

const b = 30;
b = 40; // ❌ TypeError: Assignment to constant variable.
```
- 但 **`const` 只保证变量本身不可变，数组/对象的属性仍可更改**：
```js
const obj = { name: "Kelvin" };
obj.name = "John"; // ✅ 允许修改对象属性
console.log(obj.name); // John
```

---

## 3. **提升（Hoisting）**
- **`var`** 会提升（hoisted），但值为 `undefined`。
- **`let` 和 `const`** 也会提升，但不会初始化，在访问前会报 `ReferenceError`。

```js
console.log(x); // undefined（变量提升，但没有赋值）
var x = 10;

console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 20;
```

---

## 4. **是否允许重复声明**
- **`var`** 允许重复声明。
- **`let` 和 `const`** 不能重复声明。

```js
var a = 1;
var a = 2; // ✅ 允许

let b = 1;
let b = 2; // ❌ SyntaxError: Identifier 'b' has already been declared

const c = 1;
const c = 2; // ❌ SyntaxError: Identifier 'c' has already been declared
```

---

## **总结**
| 特性         | `var` | `let` | `const` |
|-------------|------|------|--------|
| 作用域       | 函数级 | 块级 | 块级 |
| 变量提升     | **是**（初始值 `undefined`） | **是**（但不能访问） | **是**（但不能访问） |
| 允许重复声明 | **是** | **否** | **否** |
| 允许修改值   | **是** | **是** | **否**（但对象属性可改） |

**推荐使用 `let` 和 `const`，避免使用 `var`**，因为 `var` 的变量提升和作用域问题容易导致 bug。
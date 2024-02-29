# Type Vs Interface

Type can declare anythings including type, union, object and everything.

While Interface only can declare object

```ts
type Address = string | string[]

type Address = {
  line1: string;
  line2: string;
  zipCode: number;
}
```

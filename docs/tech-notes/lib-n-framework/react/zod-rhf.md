# React Hook Form + Zod

## **Why Use Zod + React Hook Form for Form Handling in React?**

### **1. Introduction**  
Handling forms in React efficiently requires proper validation, state management, and performance optimization. Combining **React Hook Form (RHF)** and **Zod** offers a robust solution.

---

### **2. What is React Hook Form?**  
React Hook Form is a lightweight and performant library for managing forms in React.  
**Key benefits:**  
✅ Minimal re-renders (performance-friendly)  
✅ Built-in integration with controlled & uncontrolled components  
✅ Easy integration with UI libraries like Material-UI, Joy UI, and ShadCN  

---

### **3. What is Zod?**  
Zod is a TypeScript-first schema validation library.  
**Key benefits:**  
✅ Type-safe validation with static type inference  
✅ Supports complex validation logic  
✅ Provides detailed error messages  
✅ Works seamlessly with React Hook Form  

---

### **4. Why Use Zod + React Hook Form Together?**  

| Feature            | React Hook Form Only | React Hook Form + Zod |
|--------------------|---------------------|-----------------------|
| **Performance**    | ✅ Minimal re-renders | ✅ Still optimized |
| **Validation**     | ❌ Custom validation logic required | ✅ Schema-based validation |
| **Type Safety**    | ❌ Manual type definitions | ✅ Auto-inferring types from schema |
| **Scalability**    | ❌ Complex logic needed for large forms | ✅ Simple, reusable schemas |
| **Error Messages** | ⚠️ Manual error handling | ✅ Automatic error formatting |

---

### **5. Code Example: Using Zod with React Hook Form**  
```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  age: z.number().min(18, "Must be at least 18 years old"),
});

type FormData = z.infer<typeof schema>;

export default function FormExample() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="number" {...register("age")} placeholder="Age" />
      {errors.age && <p>{errors.age.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

### **6. Key Advantages in Real Projects**
✅ **Better Performance** – Avoids unnecessary re-renders  
✅ **Less Boilerplate Code** – Schema-based validation reduces logic duplication  
✅ **Strong Type Safety** – Auto-generates TypeScript types from schema  
✅ **Scalability** – Easily reusable schemas for large applications  

---

### **7. Conclusion**
Using **React Hook Form** with **Zod** creates a **type-safe, performant, and scalable** form-handling solution in React. It simplifies validation, improves developer experience, and enhances maintainability.

🚀 **Use Zod + React Hook Form for better forms in React!**  

## Reference

https://www.linkedin.com/pulse/why-use-zod-react-hook-form-gerardo-madrid-79jof/ [Accessed 19 Mar 2025]
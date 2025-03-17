---
sidebar_position: 5
---

# React - useImperativeHandle


[`useImperativeHandle`](https://react.dev/reference/react/useImperativeHandle) is a React Hook that lets you customize the handle exposed as a ref.

```js
useImperativeHandle(ref, createHandle, dependencies?)
```

In my experience, useImperativeHandle is useful when you want to expose specific functions or values from a child component to its parent component, typically for imperative operations.

## Reference

```js
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Child component
const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // Expose function to focus the input element
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }));

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
});

// Parent component
function ParentComponent() {
  const childRef = useRef(null);

  const handleButtonClick = () => {
    // Call focusInput function exposed by ChildComponent
    childRef.current.focusInput();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}

export default ParentComponent;
```
import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const JavaScriptPlayground = () => {
  return (
    <LiveProvider code={`const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

console.log('size: ', size);`}
    >
      <div>
        <LiveEditor />
        <LiveError />
      </div>
      <LivePreview />
    </LiveProvider>
  );
};

export default JavaScriptPlayground;

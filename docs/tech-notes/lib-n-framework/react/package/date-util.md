# Date Util

Integrating Day.js into a React project is relatively straightforward. Here's a basic guide on how to set it up with a recommended folder structure:

1. **Install Day.js**: First, you need to install Day.js and its corresponding types for TypeScript (if you're using TypeScript). You can do this via npm or yarn:

   ```bash
   npm install dayjs
   ```

2. **Folder Structure**: Here's a recommended folder structure for your React project:

   ```
   src/
   ├── components/
   │   ├── App.ts
   │   └── ...
   ├── utils/
   │   └── date.ts
   └── ...
   ```

3. **Initialize Day.js**: In your `date.js` file inside the `utils` folder, you can initialize Day.js and export it for use throughout your application:

   ```javascript
   import dayjs from 'dayjs';

   // Optional: import any plugins you might need
   import customParseFormat from 'dayjs/plugin/customParseFormat';
   dayjs.extend(customParseFormat);

   // You can set global configurations here
   dayjs.locale('en'); // Set default locale

   export default dayjs;
   ```

4. **Using Day.js**: Now, you can use Day.js wherever you need it in your React components:

   ```javascript
   import React from 'react';
   import dayjs from '../utils/date'; // Adjust the path accordingly

   function MyComponent() {
       const formattedDate = dayjs().format('YYYY-MM-DD');
       
       return (
           <div>
               <p>Today is: {formattedDate}</p>
           </div>
       );
   }

   export default MyComponent;
   ```

This structure separates your date utility functions from your main application logic, making it easier to maintain and reuse across different components. Additionally, it allows for easy customization and expansion as your project grows.
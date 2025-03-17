# React - Axios


## Install

```bash
npm install axios
```

## Structure

```bash
my-website
├── src
│   ├── services/
│   │   ├── user.ts
│   │   ├── product.ts
│   │   └── ...
│   ├── utils/
│   │   ├── http.ts
│   │   └── ...
│   └── ...
│
.
```

### Create Axios Configuration

```ts
// src/utils/http.ts
import { AxiosRequestConfig, AxiosResponse } from 'axios'; // Import Axios types

import type { AxiosRequestConfig } from 'axios';

export const INSTANCE_CONFIG: AxiosRequestConfig = {
  // any customize config
  baseURL: '/', // Replace with your API base URL
  method: 'post',
  withCredentials: true,
  timeout: 30 * 60 * 1000, // Specify a timeout (optional)
  maxContentLength: 5 * 1000 * 1000,
  headers: {
    // any header
    'Content-Type': 'application/json',

    // customize header format: X-Xxxx-Xxxx
    'X-Requested-With': 'XMLHttpRequest',
  },
  validateStatus(status) {
    return true;
  },
  // options: {},
};

const instance = axios.create(INSTANCE_CONFIG);

// const requestHandler = async (...values: AxiosRequestConfig[]): Promise<AxiosResponse<any>> => {
//   try {
//     const data = await instance(...values);
//     return data;
//   } catch (err) {
//     throw err; // Re-throw error if it meets certain criteria
//   }
// };

// export default requestHandler;

export default instance;

```


### Define API Service

```ts
// src/services/user.ts
import http from '../utils/http';

export const getUserById = (userId: string) => {
  return http.get(`/users/${userId}`);
};

// Add more API functions as needed...

```

### Use API Services in React Components

```tsx
import React, { useEffect, useState } from 'react';
import { getUserById } from '../services/user';

const UserComponent: React.FC<{ userId: string }> = ({ userId }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getUserById(userId)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed... */}
    </div>
  );
};

export default UserComponent;
```




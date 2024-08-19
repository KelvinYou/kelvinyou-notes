# PostgreSQL String

To construct a full PostgreSQL connection string (such as `postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public`), you need the following details:

1. **Username**: The username you use to connect to PostgreSQL.
2. **Password**: The password for the PostgreSQL user.
3. **Host**: The server where PostgreSQL is running (e.g., `localhost` if it's local).
4. **Port**: The port PostgreSQL is listening on (default is `5432`).
5. **Database Name**: The name of the specific database you're connecting to.
6. **Schema (optional)**: The schema within the database (e.g., `public` is the default).

### Example Format of a PostgreSQL Connection String
```plaintext
postgresql://<username>:<password>@<host>:<port>/<database>?schema=<schema>
```

### Step-by-Step Example

1. **Username**: Let's say the username is `johndoe`.
2. **Password**: The password is `randompassword`.
3. **Host**: The host is `localhost`.
4. **Port**: The port is `5432`.
5. **Database Name**: The database name is `mydb`.
6. **Schema (optional)**: The schema is `public`.

The connection string would look like:
```plaintext
postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public
```

### How to Obtain Each Component

- **Username & Password**: These are typically set during the PostgreSQL setup process. You can check for existing users with the following SQL query in `psql`:
  ```sql
  \du
  ```
  You can create a new user and set a password with:
  ```sql
  CREATE USER johndoe WITH PASSWORD 'randompassword';
  ```

- **Host**: If you're running PostgreSQL locally, the host will be `localhost`. If it's remote, you'll use the server's IP address or domain name.

- **Port**: The default port for PostgreSQL is `5432`. If it's different, you'll need to check your PostgreSQL configuration file (`postgresql.conf`) or with your database administrator.

- **Database Name**: You can list the databases with:
  ```sql
  \l
  ```
  You can create a new database if needed with:
  ```sql
  CREATE DATABASE mydb;
  ```

- **Schema**: You can list the schemas in the current database with:
  ```sql
  \dn
  ```
  The default schema is usually `public`.

### Putting It All Together

Here's the final connection string for connecting to the `mydb` database using the `johndoe` user, the password `randompassword`, on the local PostgreSQL server (`localhost`), on port `5432`, and using the `public` schema:
```plaintext
postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public
```

This connection string can be used in various applications or tools to connect to the PostgreSQL database.
# Object Relational Mapper (ORM)

## What is an ORM?

An ORM, or Object Relational Mapper, is a piece of software designed to translate between the data representations used by databases and those used in object-oriented programming. Basically, these two ways of working with data don't naturally fit together, so an ORM attempts to bridge the gap between the two systems' data designs.

From a developer's perspective, an ORM allows you to work with database-backed data using the same object-oriented structures and mechanisms you'd use for any type of internal data. The promise of ORMs is that you won't need to rely on special techniques or necessarily learn a new querying language like SQL to be productive with your data.

In general, ORMs serve as an abstraction layer between the application and the database. They attempt to increase developer productivity by removing the need for boilerplate code and avoiding the use of awkward techniques that might break the idioms and ergonomics that you expect from your language of choice.

### Example
1. Common SQL queries

```sql
SELECT * FROM users WHERE email = 'test@test.com';
```

2. With ORM with js library

```js
var orm = require('generic-orm-libarry');
var user = orm("users").where({ email: 'test@test.com' });
```

## ORM Pros and Cons?

### Pros:
  - The connection between ORM and the database is not dependent on what the database is, making it easier to switch to another database.
  - ORM automation reduces the likelihood of errors in most database operations.
  - Since ORM supports many programming languages, you can use the database you want in the programming language you want.
  ORM supports custom queries, so you can use your own queries with ORM.

### Cons:
  - If we delete the entity we created while using ORM, the table in the database will not be deleted. Therefore, both sides must be operated in case of any discrepancies between the code and the database.
  - Similarly, if the name of the existing entity changes, a new table will be created for that name. Since the old table will not be overwritten, data is stored in two different places, causing inconsistency.
  - Due to the limited types that ORM accepts, you may have to store data in a more limited way.
  - ORM architecture may cause performance loss.

## Some ORM tools:
  1. C#: Entity Framework, Dapper, ECO, XPO, Norm
  1. Java: Hibernate, Ebean, Torque, JPA, MyBatis, JOOQ
  1. Python: Django, South, Storm
  1. .NET Framework: NHibernate
  1. JavaScript: Knex.js, SQL Query Builder, Sequelize, Bookshelf, Waterline, Objection.js, Mongoose, Typegoose, TypeORM, MikroORM, Prisma


## Reference
* [Justin Ellingwood, n.d. What is an ORM?](https://www.prisma.io/dataguide/types/relational/what-is-an-orm)
* [Mario Hoyos, 2018. What is an ORM and Why You Should Use it](https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a)
* [Kader Genç, 2023. What is ORM? Why is it used? What are its pros and cons?](https://medium.com/@kadergenc/what-is-orm-why-is-it-used-what-are-its-pros-and-cons-3ed77c0e6ed2#:~:text=Some%20of%20the%20common%20advantages,to%20write%20any%20database%20code.)
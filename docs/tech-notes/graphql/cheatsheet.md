# GraphQL - Cheat Sheet

<!-- 

TODO:
- complete it

 -->


## Query

### Basic query

```graphql
{ status }
```
↓
```graphql
{ status: 'available' }
```

### Nesting

```graphql
{ hero { name height } }
```
↓
```graphql
{ hero:
    { name: "Luke Skywalker",
      height: 1.74 } }
```

### Lists

```graphql
{ friends { name } }
```
↓
```graphql
{ friends:
    [ { name: "Luke Skywalker" },
      { name: "Han Solo" },
      { name: "R2D2" } ] }
```

GraphQL queries look the same for both single items or lists of items.

### Lookups

```graphql
{
  hero(id: "1000") { id name }
}
```
↓
```graphql
{ hero:
  { id: "1000",
  { name: "Luke Skywalker" } }
```

### Aliases

```graphql
{
  luke: hero(id: "1000") { name }
  han: hero(id: "1001") { name }
}
```
↓
```graphql
{ luke:
    { name: "Luke Skywalker" },
    han:
    { name: "Han Solo" } }
```

### Operation names and variables

Query

```graphql
query FindHero($id: String!) {
  hero(id: $id) { name }
}
```

Just to make things less ambiguous. Also, to use variables, you need an operation name.

```graphql
query FindHero($id: String!) {
  hero(id: $id) { name }
}
```

### Mutations

Query
```graphql
{ createReview($review) { id } }
```
Variables
```graphql
{ review: { stars: 5 } }
```
↓
```graphql
{ createReview: { id: 5291 } }
```

Mutations are just fields that do something when queried.

### Multiple types

```graphql
{
  search(q: "john") {
    id
    ... on User { name }
    ... on Comment { body author { name } }
  }
}
```

Great for searching.

## Over HTTP

GET

```ts
fetch('http://myapi/graphql?query={ me { name } }')
```

POST

```ts
fetch('http://myapi/graphql', {
  body: JSON.stringify({
    query: '...',
    operationName: '...',
    variables: { ... }
  })
})
```

## Schema

### Basic schemas

```graphql
type Query {
  me: User
  users(limit: Int): [User]
}

type User {
  id: ID!
  name: String
}
```

See: [sogko/graphql-shorthand-notation-cheat-sheet](https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png)

### Built in types

| Scalar Types      | Description           |
|-------------------|-----------------------|
| `Int`             | Integer               |
| `Float`           | Floating-point number |
| `String`          | String                |
| `Boolean`         | Boolean               |
| `ID`              | Unique identifier     |

| Type Definitions   | Description           |
|--------------------|-----------------------|
| `scalar`           | Scalar type           |
| `type`             | Object type           |
| `interface`        | Interface type        |
| `union`            | Union type            |
| `enum`             | Enumerable type       |
| `input`            | Input object type     |

| Type Modifiers    | Description                           |
|-------------------|---------------------------------------|
| `String`          | Nullable string                       |
| `String!`         | Required string                       |
| `[String]`        | List of strings                       |
| `[String]!`       | Required list of strings              |
| `[String!]!`      | Required list of required strings     |


### Mutations

```graphql
type Mutation {
  users(params: ListUsersInput): [User]!
}
```

### Interfaces

```graphql
interface Entity {
  id: ID!
}

type User implements Entity {
  id: ID!
  name: String
}
```

### Enums

```graphql
// highlight-start
enum DIRECTION {
  LEFT
  RIGHT
}
// highlight-end

type Root {
  direction: DIRECTION!
}
```

### Unions

```graphql
type Artist { ··· }
type Album { ··· }

// highlight-next-line
union Result = Artist | Album

type Query {
  search(q: String): [Result]
}
```

## Reference
- https://devhints.io/graphql

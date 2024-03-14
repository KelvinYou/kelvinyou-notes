# JSON Web Tokens



## Why is JWT popular?

JSON Web Tokens (JWT) have gained popularity for several reasons:

1. **Statelessness**: JWTs are stateless, meaning the server does not need to keep track of the user's session. This reduces the burden on the server and allows for scalability, as each request can be independently authenticated based on the information contained within the token.

2. **Security**: JWTs can be digitally signed using cryptographic algorithms, ensuring that the token has not been tampered with during transmission. This helps prevent unauthorized access and data manipulation.

3. **Flexibility**: JWTs can store arbitrary JSON data in the payload, allowing developers to include custom claims and information about the user or session. This flexibility makes JWTs suitable for a wide range of use cases.

4. **Interoperability**: JWTs are based on open standards (RFC 7519), making them interoperable across different platforms, frameworks, and languages. This allows developers to implement authentication and authorization mechanisms consistently across their applications.

5. **Performance**: JWTs are typically compact in size, which reduces the overhead of transmitting and processing authentication tokens. This can lead to improved performance, especially in distributed systems or microservices architectures.

6. **Decentralization**: JWTs can be easily distributed and verified without the need for a centralized authentication server. This is particularly useful in distributed or federated authentication scenarios, where multiple services or identity providers are involved.

Overall, the combination of statelessness, security, flexibility, interoperability, performance, and decentralization makes JWTs a popular choice for implementing authentication and authorization mechanisms in modern web applications and APIs.

## JWT Structure

JSON Web Tokens (JWTs) typically consist of three parts: a header, a payload, and a signature. Here's how you can structure a JWT:

1. **Header**: Contains metadata about the type of token and the signing algorithm used.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

2. **Payload**: Contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims. Here's an example:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

3. **Signature**: The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. It's created by combining the encoded header, the encoded payload, a secret (or private key), and the algorithm specified in the header.

To create a JWT:

1. Encode the header and payload using Base64URL encoding.
2. Concatenate the encoded header, a period ('.'), and the encoded payload to form the first part of the JWT.
3. Create the signature by using the algorithm specified in the header, along with the encoded header and payload, and sign it with a secret key.
4. Concatenate the first part of the JWT, a period ('.'), and the signature to form the complete JWT.

Here's an example of a JWT:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

In this example:

- Header: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
- Payload: `eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ`
- Signature: `SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

Remember, the secret key used for signing should be kept confidential to prevent tampering with the JWT.



## Interview Questions

<details>

<summary>What experience do you have with JWT?</summary>

I have extensive knowledge of the JWT protocol and how it works
- A JWT is an open standard for securely sending information between two parties
- This information can be used to identify the sender or receiver of the message, and can also include authentication credentials and additional data.
- A JWT can be encoded and signed using a variety of algorithms such as SHA-256, RSA, or ECDSA.
- Using a JWT for authentication provides an extra layer of security by ensuring that the token can't be guessed or spoofed and is structure-agnostic as well.
- The code snippet below shows an example of how to create a JWT using Node.js.

```ts
// Create a JSON Web Token 
let jwt = require('jsonwebtoken'); 

// Set your secret key 
let secretKey = 'your_secret_key';  

// Create the JWT payload 
let payload = { 
	userId: 1, 
	name: 'John Doe'
};

// Encode the payload with the secret key 
let token = jwt.sign(payload, secretKey); 

console.log(token);
```

</details>

<details>

<summary>How would you apply JWT for authentication and authorization?</summary>

Authorization and Authentication using JWT (JSON Web Token) can be implemented in several ways.
- In this article, I will discuss one such method which is based on the OAuth 2.0 protocol.
- In order to implement authorization and authentication with JWT, you need to have an Authorization Server, a Resource Server, and an Authorization Client.
- The authorization server provides an access token that can be used by the client application to gain access to the protected resources on the resource server.
- The access token is based on the OpenID Connect (OIDC) authorization protocol, which is an OAuth 2.0-based protocol.
- To implement authentication and authorization using JWT, the client application must first generate a request for an Access Token.
- This request is sent to the Authorization Server, which verifies the identity of the user by authenticating them using an appropriate authentication mechanism (e.g. username/password, multifactor authentication, etc.).
- Once the user is authenticated, the Authorization Server issues an Access Token that is signed with a private key and encrypted with a symmetric key.
- The Access Token contains information about the user such as their identity, roles, and other claims.
- The Access Token can then be used to access protected resources on the Resource Server.
- An example of a code snippet to implement authentication and authorization using JWT is provided below.

```ts
// Generate a request for an Access Token 
$request = new Request('POST', '/oauth2/token');
$request->setQueryParams([
 'grant_type' => 'password',
 'username' => $username,
 'password' => $password
]);

// Make a request to the Authorization Server 
$response = $client->send($request);

// Decode the response from the Authorization Server
$jwt = $response->getBody()->json()['access_token'];

// Verify the data in the JWT 
$decodedJwt = \Firebase\JWT\JWT::decode($jwt, 'key', ['HS256']);

// Validate the claims in the JWT 
if ($decodedJwt->iss == 'http://authorization.server.com' && 
 $decodedJwt->aud == 'http://resource.server.com') {
 // JWT is valid, proceed to access protected resources
}else {
 // JWT is invalid, return an error
}
```

</details>




1. Could you explain the different parts of a JWT token?
1. What techniques do you use to ensure secure usage of JWT?
1. Are you familiar with attack vectors on JWT tokens?
1. What strategies do you employ to prevent malicious access to JWT tokens?
1. How do you keep track of JWT tokens after they are issued?
1. What challenges have you encountered while implementing JWT?
1. How do you go about debugging JWT tokens?
1. What implications can arise when JWT tokens are improperly used?
1. Is it possible to revoke a JWT token?
1. What other technologies do you believe are beneficial when using JWT?


https://www.javastructures.com/misc/jwt



## Reference

https://www.youtube.com/watch?v=P2CPd9ynFLg

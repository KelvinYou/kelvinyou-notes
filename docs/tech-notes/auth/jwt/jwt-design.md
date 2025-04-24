# JWT Design

### ✅ 1. **JWT Structure (Standard)**
```plaintext
Header.Payload.Signature
```

---

### ✅ 2. **Header**
```json
{
  "alg": "HS256", // or RS256 for asymmetric
  "typ": "JWT"
}
```

- Use **RS256** (asymmetric) if you're distributing public keys (e.g., 3rd party clients).
- Use **HS256** (symmetric) for internal API tokens.

---

### ✅ 3. **Payload (Claims)**
Keep it minimal. Example:
```json
{
  "sub": "user_id_123",        // Subject (user id)
  "iss": "https://yourapp.com", // Issuer
  "aud": "your-app-client",     // Audience
  "exp": 1716667200,            // Expiration time (UNIX timestamp)
  "iat": 1716663600,            // Issued at
  "nbf": 1716663600,            // Not before (optional)
  "role": "admin",              // Custom claim (minimal!)
  "jti": "unique-token-id"      // JWT ID (optional for revocation tracking)
}
```

✅ **Best Practices**:
- **Use short lifespans** (`exp`) for access tokens (e.g., 15 mins).
- Use longer-lived **refresh tokens** (stored securely).
- Avoid putting **sensitive data** like passwords or personal info in JWTs.
- Include `aud`, `iss`, and `sub` for clarity and validation.
- Use `jti` for token blacklisting/revocation if needed.

---

### ✅ 4. **Signature**
- Protects token from tampering.
- Sign with a strong secret (`HS256`) or private key (`RS256`).
- Rotate keys regularly.

---

### ✅ 5. **Access & Refresh Token Strategy**
- Access Token: Short-lived, stored in memory or `Authorization: Bearer`.
- Refresh Token: Long-lived, stored in **httpOnly cookies** or secure storage, used to issue new access tokens.

---

### ✅ 6. **Validation Best Practices**
- Always verify:
  - Signature
  - `exp`, `iat`, `nbf`
  - `iss` and `aud` match your app
- Use libraries like `jsonwebtoken`, `jose`, or `nimbus-jose-jwt`.

---

### 🛑 Common Mistakes to Avoid
- ❌ Storing JWTs in localStorage (vulnerable to XSS).
- ❌ Using long-lived access tokens without refresh logic.
- ❌ Putting sensitive data inside the payload.
- ❌ Not rotating keys or handling token revocation.

---

### ✨ Optional Enhancements
- Use **Key ID (`kid`)** in header for rotating keys.
- Implement **revocation list** (using `jti`).
- Combine with **OAuth2 / OpenID Connect** for broader compatibility.

---

If you're building an app, I can help sketch out the actual implementation (e.g., with Supabase, Firebase, Node.js, or a Next.js app). Want to go deeper into any specific part?
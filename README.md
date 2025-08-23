# Load Universal Login Page in an iFrame using Cloudflare Worker

This repository contains a Cloudflare Worker script that removes restrictive headers from HTTP responses, allowing your application to be embedded in an iframe. This is useful for scenarios where you need to bypass headers like `Content-Security-Policy` and `X-Frame-Options` that typically prevent embedding.

## Features
- Cloudflare worker that does couple of things
	- Removes `Content-Security-Policy` and `X-Frame-Options` headers from responses headers before returning to browser
	- Adds additional header `Permissions-Policy` header to allow passkey creation and retrieval in iframes
- A sample html page that allows user to load an URL into iFrame

## 🚀 Live Demo
https://iframedemo.identityplayground.com/

## File Structure
- `override-response-headers-cf-worker.js`: Cloudflare Worker script (latest version).
- `index.html`: Example HTML file.
- `README.md`: This documentation.

## Learn More
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [WebAuthn (Passkeys) Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy)
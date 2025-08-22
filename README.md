# Load Universal Login Page in an iFrame using Cloudflare Worker

This repository contains a Cloudflare Worker script that removes restrictive headers from HTTP responses, allowing your application to be embedded in an iframe. This is useful for scenarios where you need to bypass headers like `Content-Security-Policy` and `X-Frame-Options` that typically prevent embedding.

## Features
- Removes `Content-Security-Policy` and `X-Frame-Options` headers from responses.
- Simple Cloudflare Worker implementation.

## Live Demo
https://iframedemo.identityplayground.com/

## Usage
1. **Development**
	- Run `npm run dev` to start a local development server.
	- Open [http://localhost:8787/](http://localhost:8787/) to test your worker.

2. **Deployment**
	- Run `npm run deploy` to publish your worker to Cloudflare.

## How It Works
The worker intercepts fetch events, forwards the request to the origin, and removes the specified headers from the response before returning it to the client.

## File Structure
- `remove-iFrame-headers-cf-worker.js`: Cloudflare Worker script.
- `index.html`: Example HTML file (if present).

## Learn More
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)

## License
MIT

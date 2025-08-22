/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

  // Fetch the response from the origin server.
  const response = await fetch(request);

  // Create a new mutable response object.
  const newResponse = new Response(response.body, response);

  // Remove the specified headers.
  newResponse.headers.delete('Content-Security-Policy');
  newResponse.headers.delete('X-Frame-Options');
  
  // Return the modified response.
  return newResponse;
}
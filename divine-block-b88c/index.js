const html = `<!DOCTYPE html>
<body>
  <h1>Hello</h1>
</body>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  })
}

addEventListener('fetch', (event) => {
  console.log(event)
  return event.respondWith(handleRequest(event.request))
})

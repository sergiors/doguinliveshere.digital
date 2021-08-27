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

async function handleRequest(request) {
  const upgradeHeader = request.headers.get('Upgrade')
  if (!upgradeHeader || upgradeHeader !== 'websocket') {
    return new Response('Expected Upgrade: websocket', { status: 426 })
  }

  const webSocketPair = new WebSocketPair()
  const [client, server] = Object.values(webSocketPair)

  server.accept()
  server.addEventListener('message', (event) => {
    console.log(event.data)
  })

  return new Response(null, {
    status: 101,
    webSocket: client,
  })
}

addEventListener('fetch', (event) => {
  try {
  } catch (err) {
    return new Response(err.toString())
  }
  return event.respondWith(handleRequest(event.request))
})

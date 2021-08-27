async function handleRequest(request) {
  const upgradeHeader = request.headers.get('Upgrade')

  if (!upgradeHeader || upgradeHeader !== 'websocket') {
    return new Response('Expected Upgrade: websocket', { status: 426 })
  }

  const webSocketPair = new WebSocketPair()
  const [client, server] = Object.values(webSocketPair)

  server.accept()
  server.addEventListener('message', async (event) => {
    console.log(event)
    server.send(JSON.stringify({ data: event.data, tz: new Date() }))
  })

  return new Response(null, {
    status: 101,
    webSocket: client,
  })
}
//
// addEventListener('fetch', (event) => {
//   console.log(event)
//   return event.respondWith(handleRequest(event.request))
// })


// const html = `<!DOCTYPE html>
// <body>
//   <h1>Hello</h1>
// </body>`
//
// async function handleRequest(request) {
//   return new Response(html, {
//     headers: {
//       'content-type': 'text/html;charset=UTF-8',
//     },
//   })
// }

addEventListener('fetch', (event) => {
  console.log(event)
  return event.respondWith(handleRequest(event.request))
})

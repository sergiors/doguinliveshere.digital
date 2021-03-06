#!/usr/bin/env python

import asyncio
import websockets


async def hello():
    uri = "wss://doguinliveshere.digital/ws"
    async with websockets.connect(uri) as websocket:
        await websocket.send("Hello world!")
        await websocket.recv()

asyncio.get_event_loop().run_until_complete(hello())

import React, { useEffect } from "react";
export default function WebSocketClient() {
  function clientSocket() {
    useEffect(() => {
      const socket = new WebSocket("ws://localhost:3000");
      socket.onopen = () => {
        console.log("WebSocket Connected");
      };
      socket.onmessage = (event) => {
        console.log("Server sent: ", event.data);
      };
      socket.onerror = (err) => {
        console.log("WebSocket server error: ", err);
      };

      socket.onclose = () => {
        console.log("Websocket server connection closed");
      };
      return () => {
        socket.close();
      };
    }, []);
  }
  clientSocket();

  return <div>WebSocketClient</div>;
}

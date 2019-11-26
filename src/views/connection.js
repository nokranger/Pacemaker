export let connection = new WebSocket('ws://localhost:4040')
connection.onerror = function (error) {
  console.error('WebSocket Error ' + error)
}

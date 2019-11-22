export let connection = new WebSocket('ws://localhost:1308')
connection.onerror = function (error) {
  console.error('WebSocket Error ' + error)
}

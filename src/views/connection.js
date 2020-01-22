import pacemaker from '../views/Pacemaker'
export let connection

function connect () {
  connection = new WebSocket('ws://localhost:1308')
  connection.onopen = function () {
    // subscribe to some channels
    connection.send(
      JSON.stringify({ protocol: 'change_page', data: { page: 'C1' } })
    )
  }

  connection.onmessage = function (e) {
    console.log('Message:', e.data)
    let res = JSON.parse(e.data)
    if (res.protocol === 'pace_maker_info') {
      pacemaker.methods.getData(res)
    }
  }

  connection.onclose = function (e) {
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason)
    setTimeout(function () {
      connect()
    }, 1000)
  }

  connection.onerror = function (err) {
    console.error('Socket encountered error: ', err.message, 'Closing socket')
    connection.close()
  }
}

connect()

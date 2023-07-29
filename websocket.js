const wx = new WebSocket('ws://hnt.jetone.cn:8110/socket.io/?ElO=3&transport=websocket&sid=z-FosQMOmLWGlzjkC22Z')
wx.onopen = function(e) {
    console.log('open', e)
}
wx.onmessage = function (e) {
    console.log('message', e)
}

wx.onerror = function (e) {
    console.log('error', e)
}
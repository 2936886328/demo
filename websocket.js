const wx = new WebSocket('ws://hnt.jetone.cn:8110/socket.io/?ElO=3&transport=websocket&sid=z-FosQMOmLWGlzjkC22Z')
// "4BzMII/meNh8vRyaDZdgij-6LoQCijNlqjWiKYgJ50qlNYA0sQbIS9qYtCnyBaaLHJVqvDy2eNtYw1S-62bieM5e4FTRJuhr-rte5BLLtm6iM/g7qJEW4xymO7hG0VDLsDW9OKwUhwOBa/d77mjUU8NC0LM5qyyUHpYdjXzxYulCy0ymBXD-dPVWwg-OCr8="

// const wx = new WebSocket('ws://hnt.jetone.cn:8110')
wx.onopen = function(e) {
    console.log('open', e)
}
// wx.send('1')
wx.onmessage = function (e) {
    console.log('message', e)
}

wx.onerror = function (e) {
    console.log('error', e)
}

console.log(wx.readyState)
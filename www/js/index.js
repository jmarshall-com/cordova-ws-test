document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    const ws = new WebSocket('wss://echo.websocket.org');

    ws.onopen = () => alert('WebSocket connected!') ;
    ws.onerror = (error) => alert('WebSocket error: ' + JSON.stringify(error)) ;
    ws.onclose = (event) => alert('WebSocket closed: '+ event.code + ' ' + event.reason) ;
}


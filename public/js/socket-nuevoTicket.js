//COMANDO PARA ESTABLECER LA CONEXION
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', (resp) => {
    label.text(resp.actual);
});

$('#genererTicket').on('click', function() {
    socket.emit('generarTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});
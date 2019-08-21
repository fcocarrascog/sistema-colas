//COMANDO PARA ESTABLECER LA CONEXION
var socket = io();

let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
let label = $('small');

console.log(escritorio);
$('h1').text(`Escritorio ${escritorio}`);

$('#atenderTicket').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        console.log(resp);
        if (resp === 'No hay tickets pendientes') {
            alert(resp);
            return;
        }

        label.text(`Ticket ${resp.numero}`);
    });
});
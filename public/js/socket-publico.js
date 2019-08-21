//COMANDO PARA ESTABLECER LA CONEXION
var socket = io();

let lblTicket1 = $('#lblTicket1'),
    lblTicket2 = $('#lblTicket2'),
    lblTicket3 = $('#lblTicket3'),
    lblTicket4 = $('#lblTicket4');


let lblEscritorio1 = $('#lblEscritorio1'),
    lblEscritorio2 = $('#lblEscritorio2'),
    lblEscritorio3 = $('#lblEscritorio3'),
    lblEscritorio4 = $('#lblEscritorio4');


var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

function actualizaHTML(ultimosCuatro) {
    for (let i = 0; i <= ultimosCuatro.length - 1; i++) {
        lblTickets[i].text(`Ticket ${ultimosCuatro[i].numero}`);
        lblEscritorios[i].text(`Escritorio ${ultimosCuatro[i].escritorio}`)
    }
}

socket.on('estadoActual', function(resp) {
    actualizaHTML(resp.ultimosCuatro);

});

socket.on('ultimosCuatro', function(resp) {

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(resp.ultimosCuatro);
});
var chat = function (io){
	io.on('connection', function (socket) {
		socket.emit('nuevoMensaje', { mensaje: 'Hola mundo.!' });

		socket.on('getMensaje', function (data) {
			console.log(data);
		});
	});
}

module.exports = chat;
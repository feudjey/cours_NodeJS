var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200);
	res.end('Salut tout le monde !');
});

server.on('close', function () { // On écoute l'évènement close
	console.log('Au revoir !');
})

server.listen(8080); // Démarre le serveur


var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function (message, complement) {
	console.log(message + " " + complement);
});

jeu.emit('gameover', 'Vous avez perdu !', 'gros nul');

server.close(); // Arrête le serveur. Déclenche l'évènement close

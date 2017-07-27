var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express();

function erreur(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.send(404, 'Page introuvable !');
}

app


	.use(morgan('combined')) // Active le middleware de logging
	.use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
	.use(favicon(__dirname + '/public/favicon.ico')) // Active la favicon indiquée
	.use(function (req, res) { // Répond enfin
		res.send('Hello');
	})




	.get('/', function (req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
	})
	.get('/sous-sol', function (req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
	})
	.get('/etage/:etagenum/chambre', function (req, res) {
		if (Number(req.params.etagenum) * 0 === 0) {
			res.render('chambre.ejs', {
				etage: req.params.etagenum
			});
		} else {
			erreur(req, res);
		}
	})
	.get('/compter/:nombre', function (req, res) {
		var noms = ['Robert', 'Bill', 'David'];
		if (Number(req.params.nombre) * 0 === 0) {
			res.render('page.ejs', {
				compteur: req.params.nombre,
				noms: noms
			});
		} else {
			erreur(req, res);
		}
	})
	.use(erreur)

	.listen(8080);

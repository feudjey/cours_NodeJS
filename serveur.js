var express = require('express');

var app = express();

app
	.get('/', function (req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
	})
	.get('/sous-sol', function (req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
	})
	.get('/etage/:etagenum/chambre', function (req, res) {
		res.setHeader('Content-Type', 'text/plain');
		if (Number(req.params.etagenum) * 0 === 0) {
			res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
		} else(erreur(req, res))
	})
	.use(erreur)

	.listen(8080);

function erreur(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.send(404, 'Page introuvable !');
};

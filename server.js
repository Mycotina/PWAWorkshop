var express = require('express'),
	app		= express(),
	port 	= process.env.PORT || 3002;

bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('.'))

app.listen(port);

console.log('The server is up an running on port : ' + port);
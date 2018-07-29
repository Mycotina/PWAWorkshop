var express = require('express'),
	app		= express(),
	port 	= process.env.PORT || 3002;

bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/route/my_route'); //importing route
routes(app); //register the route


app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
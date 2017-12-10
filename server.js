//grab the required packages
var express = require('express');

var ig = require("instagram-node").instagram();
//create an express app
var app = express();

//CONFIGURE

//tell node where to look for the site resources.
app.use(express.static(__dirname + '/public'));

//set the view engine to ejs
app.set('view engine', 'ejs');

//create an express route for the home page
app.get('/', function (req,res) {
	//res.sendFile(__dirname + '/index.html');
	res.render('pages/index');
});

//start the server on port 9001
app.listen(9001);

console.log("server has started!!")

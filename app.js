/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var login = require("./Controller/login");

// create a new express server
var app = express();
var router = express.Router();
// serve the files out of ./public as our main files
app.use(express.static(path.join(__dirname ,'public')));
//Shalini
app.set('views', path.join(__dirname, '/views')); 

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//render login.html
app.get('/login', function(req,res){
	res.render("login.ejs");
});
app.post('/login', function(req,res,next){
    login.getList(req,res);
});

app.get('/listEmp', function(req,res){
	res.render("ListEmployees.ejs");
});

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});


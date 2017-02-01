/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var path = require('path');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var engines = require('consolidate');

var loginRouter = express.Router();

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(path.join(__dirname ,'public')));
//Shalini
app.set('views', path.join(__dirname, '/views')); 
app.engine('html', engines.mustache);
app.set('view engine', 'html');

//render login.html
app.get('/login', function(req,res){
	res.render("login.html");
});

//navigate from login
loginRouter.route("/")
	.get(function(req, res){
		console.log('login router called');
		res.send("login success");
		//res.render("ListEmployees.html");
	});
loginRouter.route("/admin")
	.get(function(req, res){
		console.log('admin login router called');
		res.send("admin login success");
	});
app.use('/AppLogin', loginRouter);

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

/**
 * http://usejsdoc.org/
 */
var getDB = require("../lib/dbConfig")
var myDbCon = getDB.con ;

var getList = function(req, res){
	console.log(JSON.stringify(req.body));
};

exports.getList = getList;
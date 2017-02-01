/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose');
var con;

mongoose.connect("mongodb://localhost/EmpManagementDB");
con = mongoose.connection;

exports.con = con;
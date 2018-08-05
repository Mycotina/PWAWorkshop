'use strict';


/*var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');*/

exports.list_all_tasks = function(req, res) {
  console.log("Req : " + req);
  res.send("AWALA AWALA");
};




exports.create_a_task = function(req, res) {
  console.log("Req : " + req);
  res.send("HOBOBOBO");
};


exports.read_a_task = function(req, res) {
  console.log("Req : " + req);
  res.send("ANJAAAAY");
};


exports.update_a_task = function(req, res) {
 console.log("Req : " + req);
  res.send("PUKIMA");
};


exports.delete_a_task = function(req, res) {
  console.log("Req : " + req);
  res.send("NOEEEE");
};

//https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js
var http = require('http');
var fs = require('fs');
var formidable = require('formidable'); 
var express = require('express');
var app = express();
var port = 8080;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function () {
  passport.use(new LocalStrategy({
        usernameField: 'userid',
        passwordField: 'password'
      },
      function(email, password, done) {
        if (email === 'test@test.com' && password === 'test') {
          var user = {id: 'user_1'};
          return done(null, user);
        } else {
          return done(null, false, { message: 'Fail to login.' });
        }
      }
  ));
};

var server = app.listen(8080, function(){
    console.log("Express server has started on port 8080")
});

app.get('/', function(req, res){
	fs.readFile('views/main.html', function(err, data) {
    		res.writeHead(200, {'Content-Type': 'text/html'});
   		res.write(data);
    		res.end();
 	});	
}) 

app.get('/problemA/download', function(req, res){
  var file = __dirname + '/testcases/A.txt';
  res.download(file);
});

app.get('/problemA', function(req, res){
  	fs.readFile('views/A.html', function(err, data) {
    		res.writeHead(200, {'Content-Type': 'text/html'});
   		res.write(data);
    		res.end();
 	});
});

app.post('/problemA/fileupload', function(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload.path;
		var newpath = './submitted/' + files.filetoupload.name;
		var spawn = require("child_process").spawn;
		var process = spawn('python',["grade.py", "answers/A.txt", newpath]);
		process.stdout.on('data', function (data){
			if (data == 'CORRECT\n'){
				fs.rename(oldpath, newpath, function (err) {
					if (err) throw err;
					res.write('Correct! please go back and try another problem');
					res.end();
      				});				
			}
			else if (data == 'WRONG\n'){
				fs.rename(oldpath, newpath, function (err) {
					if (err) throw err;
					res.write('Wrong! please go back and try again');
					res.end();
      				});
			}
		}); 
	});	
})

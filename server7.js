var http = require('http');
var fs = require('fs');
var formidable = require('formidable'); 
var express = require('express');
var app = express();
var port = 8087;
var is_correct = new Array(8);

var server = app.listen(port, function(){
    console.log("Express server has started on port "+port)
});

app.get('/', function(req, res){
	fs.readFile('views/main.html', function(err, data) {
    		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />");
		res.write("팀 <><><br>");
   		res.write(data);
		res.write("<br><br>A");
		if(is_correct[0] == true)
			res.write('   <font size="3" color="green">CORRECT</font>');
		else
			res.write('   <font size="3" color="red">WRONG</font>');
		res.write("<br><br>B");
		if(is_correct[1] == true)
			res.write('   <font size="3" color="green">CORRECT</font>');
		else
			res.write('   <font size="3" color="red">WRONG</font>');
		res.write("<br><br>C");
		if(is_correct[2] == true)
			res.write('   <font size="3" color="green">CORRECT</font>');
		else
			res.write('   <font size="3" color="red">WRONG</font>');
		res.write("<br><br>D");
		if(is_correct[3] == true)
			res.write('   <font size="3" color="green">CORRECT</font>');
		else
			res.write('   <font size="3" color="red">WRONG</font>');
		res.write("<br><br>E");
		if(is_correct[4] == true)
			res.write('   <font size="3" color="green">CORRECT</font>');
		else
			res.write('   <font size="3" color="red">WRONG</font>');
		res.write("<br><br>F");
		if(is_correct[5] == true)
			res.write('   <font size="3" color="green">CORRECT</font>');
		else
			res.write('   <font size="3" color="red">WRONG</font>');
		res.write("<br><br>G");
		if(is_correct[6] == true)
			res.write('   <font size="3" color="green">CORRECT</font>');
		else
			res.write('   <font size="3" color="red">WRONG</font>');
		res.write("<br><br>H");
		if(is_correct[7] == true)
			res.write('   <font size="3" color="green">CORRECT</font>');
		else
			res.write('   <font size="3" color="red">WRONG</font>');
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
		if(files.filetoupload.name == ''){
			res.write('Wrong! please go back and try again');
			res.end();
		}
		else{
			var newpath = './submitted/'+port.toString() + files.filetoupload.name;
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
      			});				
			var spawn = require("child_process").spawn;
			var process = spawn('python',["grade.py", "answers/A.txt", newpath]);
			process.stdout.on('data', function (data){
				if (data == 'CORRECT\n'){
						const spawn = require('child_process').spawn;
						const bat = spawn('mkdir', ["correct/"+port.toString()+"A"]);
						is_correct[0] = true;
						res.write('Correct! please go back and try another problem');
						res.end();		
				}
				else if (data == 'WRONG\n'){
						res.write('Wrong! please go back and try again');
						res.end();
				}
			});
		} 
	});	
})

app.get('/problemB/download', function(req, res){
  var file = __dirname + '/testcases/B.txt';
  res.download(file);
});

app.get('/problemB', function(req, res){
  	fs.readFile('views/B.html', function(err, data) {
    		res.writeHead(200, {'Content-Type': 'text/html'});
   		res.write(data);
    		res.end();
 	});
});

app.post('/problemB/fileupload', function(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload.path;
		if(files.filetoupload.name == ''){
			res.write('Wrong! please go back and try again');
			res.end();
		}
		else{
			var newpath = './submitted/' +port.toString()+ files.filetoupload.name;
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
      			});				
			var spawn = require("child_process").spawn;
			var process = spawn('python',["grade.py", "answers/B.txt", newpath]);
			process.stdout.on('data', function (data){
				if (data == 'CORRECT\n'){
						const spawn = require('child_process').spawn;
						const bat = spawn('mkdir', ["correct/"+port.toString()+"B"]);
						is_correct[1] = true;
						res.write('Correct! please go back and try another problem');
						res.end();		
				}
				else if (data == 'WRONG\n'){
						res.write('Wrong! please go back and try again');
						res.end();
				}
			});
		} 
	});	
})

app.get('/problemC/download', function(req, res){
  var file = __dirname + '/testcases/C.txt';
  res.download(file);
});

app.get('/problemC', function(req, res){
  	fs.readFile('views/C.html', function(err, data) {
    		res.writeHead(200, {'Content-Type': 'text/html'});
   		res.write(data);
    		res.end();
 	});
});

app.post('/problemC/fileupload', function(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload.path;
		if(files.filetoupload.name == ''){
			res.write('Wrong! please go back and try again');
			res.end();
		}
		else{
			var newpath = './submitted/' +port.toString()+ files.filetoupload.name;
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
      			});				
			var spawn = require("child_process").spawn;
			var process = spawn('python',["grade.py", "answers/C.txt", newpath]);
			process.stdout.on('data', function (data){
				if (data == 'CORRECT\n'){
						const spawn = require('child_process').spawn;
						const bat = spawn('mkdir', ["correct/"+port.toString()+"C"]);
						is_correct[2] = true;
						res.write('Correct! please go back and try another problem');
						res.end();		
				}
				else if (data == 'WRONG\n'){
						res.write('Wrong! please go back and try again');
						res.end();
				}
			});
		} 
	});	
})

app.get('/problemD/download', function(req, res){
  var file = __dirname + '/testcases/D.txt';
  res.download(file);
});

app.get('/problemD', function(req, res){
  	fs.readFile('views/D.html', function(err, data) {
    		res.writeHead(200, {'Content-Type': 'text/html'});
   		res.write(data);
    		res.end();
 	});
});

app.post('/problemD/fileupload', function(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload.path;
		if(files.filetoupload.name == ''){
			res.write('Wrong! please go back and try again');
			res.end();
		}
		else{
			var newpath = './submitted/' +port.toString()+ files.filetoupload.name;
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
      			});				
			var spawn = require("child_process").spawn;
			var process = spawn('python',["grade.py", "answers/D.txt", newpath]);
			process.stdout.on('data', function (data){
				if (data == 'CORRECT\n'){
						const spawn = require('child_process').spawn;
						const bat = spawn('mkdir', ["correct/"+port.toString()+"D"]);
						is_correct[3] = true;
						res.write('Correct! please go back and try another problem');
						res.end();		
				}
				else if (data == 'WRONG\n'){
						res.write('Wrong! please go back and try again');
						res.end();
				}
			});
		} 
	});	
})

app.get('/problemE/download', function(req, res){
  var file = __dirname + '/testcases/E.txt';
  res.download(file);
});

app.get('/problemE', function(req, res){
  	fs.readFile('views/E.html', function(err, data) {
    		res.writeHead(200, {'Content-Type': 'text/html'});
   		res.write(data);
    		res.end();
 	});
});

app.post('/problemE/fileupload', function(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload.path;
		if(files.filetoupload.name == ''){
			res.write('Wrong! please go back and try again');
			res.end();
		}
		else{
			var newpath = './submitted/' +port.toString()+ files.filetoupload.name;
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
      			});				
			var spawn = require("child_process").spawn;
			var process = spawn('python',["grade.py", "answers/E.txt", newpath]);
			process.stdout.on('data', function (data){
				if (data == 'CORRECT\n'){
						const spawn = require('child_process').spawn;
						const bat = spawn('mkdir', ["correct/"+port.toString()+"E"]);
						is_correct[4] = true;
						res.write('Correct! please go back and try another problem');
						res.end();		
				}
				else if (data == 'WRONG\n'){
						res.write('Wrong! please go back and try again');
						res.end();
				}
			});
		} 
	});		
})

app.get('/problemF/download', function(req, res){
  var file = __dirname + '/testcases/F.txt';
  res.download(file);
});

app.get('/problemF', function(req, res){
  	fs.readFile('views/F.html', function(err, data) {
    		res.writeHead(200, {'Content-Type': 'text/html'});
   		res.write(data);
    		res.end();
 	});
});

app.post('/problemF/fileupload', function(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload.path;
		if(files.filetoupload.name == ''){
			res.write('Wrong! please go back and try again');
			res.end();
		}
		else{
			var newpath = './submitted/' + port.toString()+files.filetoupload.name;
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
      			});				
			var spawn = require("child_process").spawn;
			var process = spawn('python',["grade.py", "answers/F.txt", newpath]);
			process.stdout.on('data', function (data){
				if (data == 'CORRECT\n'){
						const spawn = require('child_process').spawn;
						const bat = spawn('mkdir', ["correct/"+port.toString()+"F"]);
						is_correct[5] = true;
						res.write('Correct! please go back and try another problem');
						res.end();		
				}
				else if (data == 'WRONG\n'){
						res.write('Wrong! please go back and try again');
						res.end();
				}
			});
		} 
	});		
})

app.get('/problemG/download', function(req, res){
  var file = __dirname + '/testcases/G.txt';
  res.download(file);
});

app.get('/problemG', function(req, res){
  	fs.readFile('views/G.html', function(err, data) {
    		res.writeHead(200, {'Content-Type': 'text/html'});
   		res.write(data);
    		res.end();
 	});
});

app.post('/problemG/fileupload', function(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload.path;
		if(files.filetoupload.name == ''){
			res.write('Wrong! please go back and try again');
			res.end();
		}
		else{
			var newpath = './submitted/' +port.toString()+ files.filetoupload.name;
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
      			});				
			var spawn = require("child_process").spawn;
			var process = spawn('python',["grade.py", "answers/G.txt", newpath]);
			process.stdout.on('data', function (data){
				if (data == 'CORRECT\n'){
						const spawn = require('child_process').spawn;
						const bat = spawn('mkdir', ["correct/"+port.toString()+"G"]);
						is_correct[6] = true;
						res.write('Correct! please go back and try another problem');
						res.end();		
				}
				else if (data == 'WRONG\n'){
						res.write('Wrong! please go back and try again');
						res.end();
				}
			});
		} 
	});		
})

app.get('/problemH/download', function(req, res){
  var file = __dirname + '/testcases/H.txt';
  res.download(file);
});

app.get('/problemH', function(req, res){
  	fs.readFile('views/H.html', function(err, data) {
    		res.writeHead(200, {'Content-Type': 'text/html'});
   		res.write(data);
    		res.end();
 	});
});

app.post('/problemH/fileupload', function(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload.path;
		if(files.filetoupload.name == ''){
			res.write('Wrong! please go back and try again');
			res.end();
		}
		else{
			var newpath = './submitted/' + port.toString()+files.filetoupload.name;
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
      			});				
			var spawn = require("child_process").spawn;
			var process = spawn('python',["grade.py", "answers/H.txt", newpath]);
			process.stdout.on('data', function (data){
				if (data == 'CORRECT\n'){
						const spawn = require('child_process').spawn;
						const bat = spawn('mkdir', ["correct/"+port.toString()+"H"]);
						is_correct[7] = true;
						res.write('Correct! please go back and try another problem');
						res.end();		
				}
				else if (data == 'WRONG\n'){
						res.write('Wrong! please go back and try again');
						res.end();
				}
			});
		} 
	});		
})

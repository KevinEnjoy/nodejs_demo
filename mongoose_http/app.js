var http = require('http');
var url = require('url');
var util = require('util');
var db = require('./db');

//http://localhost:8080/user?name=sam

var server = function(req,res){
	
	res.writeHead(200,{'Content-Type':'application/json'});
	
    var params = url.parse(req.url,true).query;
	//console.log('pathname = '+url.parse(req.url).pathname);
	//console.log('name = '+params['name']);
	//console.log('email = ' + params['email']);
	if(params['name']==null){
		//findAll
		db.find(function(result){
		res.end(result);
		});
	}else {
		//findByName
		var query = {'name':params['name']};
		db.findByName(query,function(err,users){
		if(err)res.end(err);
		str = JSON.stringify(users); 
		res.end(str);
		});
	}

};

http.createServer(server).listen(8080);
console.log('server is running!');

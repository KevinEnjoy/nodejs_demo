var http = require('http');
var url = require('url');
var util = require('util');

var handler = function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	
    var params = url.parse(req.url,true).query;
	console.log('pathname = '+url.parse(req.url).pathname);
	console.log('name = '+params['name']);
	console.log('email = ' + params['email']);
	res.end('OK');
};

http.createServer(handler).listen(8080);
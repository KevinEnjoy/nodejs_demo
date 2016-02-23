var http = require('http');
var url = require('url');
var util = require('util');

var handler = function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end(util.inspect(url.parse(req.url,true)));
	
	//var params = [];
    //params = url.parse(req.url,true).query;
};

http.createServer(handler).listen(8080);
var http = require('http');
var querystring = require('querystring');
var util = require('util');

var server = function(req,res){
	var post = '';
	req.on('data',function(chunk){
		//����post�����ڡ������塯(content)������
		post +=chunk;
		console.log('chunk='+chunk+',post='+post);

	});
	req.on('end',function(){
		post = querystring.parse(post);
		res.end(util.inspect(post));
	});
};

http.createServer(server).listen(8080);
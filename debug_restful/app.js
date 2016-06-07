var restify = require('restify');
var url = require('url');
/**
Get/Post/Put/Delete Url:
http://localhost:8080/hello
Parameters:
name=kevin
*/

var server = restify.createServer('MyServer');

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/hello', function create(req,res,next){
	
	//get很少带参数的
	var params = url.parse(req.url,true).query;
	console.log('post:%s',params['name']);
	
	res.send('get:'+params['name']);
});

server.post('/hello',function create(req,res,next){
	
	var jsonParams = req.params;
	
	console.log('post body:'+req.body);
	console.log('post:%s',jsonParams.name);
	
	res.send(201,jsonParams);//响应一个对象，将以JSON格式返回
	return next();
});

server.put('/hello', function create(req,res,next){
	
	var jsonParams = req.params;
	console.log('put body:'+req.body);
	
	console.log('put:%s',jsonParams.name);
	res.send('put:'+jsonParams.name);
});

server.del('/hello', function create(req,res,next){
	
	var jsonParams = req.params;
	console.log('delete body:'+req.body);
	console.log('delete:%s',jsonParams.name);
	
	res.send(204,'delete:'+jsonParams.name);
	return next();
});

server.head('/hello', function create(req,res,next){
	res.send('this is head request!!!');
});

server.listen(8080, '127.0.0.1',function() {
  console.log('%s listening at %s', server.name, server.url);
});
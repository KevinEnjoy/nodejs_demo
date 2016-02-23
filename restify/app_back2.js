var restify = require('restify');



var server = restify.createServer();

server.post('/hello',function create(req,res,next){
	res.send(201,'this is post request!!!');
	return next();
});
server.get('/hello', function create(req,res,next){
	res.send('this is get request!!!');
});
server.put('/hello', function create(req,res,next){
	res.send('this is put request!!!');
});
server.head('/hello', function create(req,res,next){
	res.send('this is head request!!!');
});
server.del('/hello', function create(req,res,next){
	res.send(204,'this is del request!!!');
	return next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
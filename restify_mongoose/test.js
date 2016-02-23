var restify = require('restify');

var server = restify.createServer('MyServer');

server.get('/hello', function create(req,res,next){	
	
	var contact = new Object();
	contact.firstname = "Jesper";
	contact.surname = "Aaberg";
	contact.phone = ["555-0100", "555-0120"];
	
	var array = new Array();
	array[0] = contact;
	array[1] = contact;
	res.send(array);
	
});

server.listen(8080, '127.0.0.1',function() {
  console.log('%s listening at %s', server.name, server.url);
});
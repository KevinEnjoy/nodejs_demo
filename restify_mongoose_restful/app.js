var restify = require('restify');
var url = require('url');
var db = require('./db');

//http://localhost:8080/user?name=sam&age=90

var server = restify.createServer('MyServer');

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());



server.post('/user',function create(req,res,next){
	console.log('post /user');
	var jsonParams = req.params;
	for(var key in jsonParams)
    {
        console.log('key:'+key);
    }
	console.log('Params:'+jsonParams);
    console.log('body:'+req.body);
	
	if (jsonParams.name == undefined || jsonParams.age == undefined) {
		console.log('InvalidArgumentError Name must be supplied');
        return next(new restify.InvalidArgumentError('Name must be supplied'));
    }

		var user_one = {'name':jsonParams.name,'age':jsonParams.age};
		db.addUser(user_one,function(err,user_result){
			if(err){
				res.send(err);
			}else{
				//输出JSON String 会有转义符‘\’
				//var str = 'create user:'+JSON.stringify(user_result); 
				//console.log('result:'+str);
				res.send(201,user_result);
			}
		return next();
		});
		
});
		
		
server.get('/user', function create(req,res,next){
	

	var params = url.parse(req.url,true).query;
	if(params['name']==null){
		//findAll
		db.find(function(result){
		res.send(result);
		});
	}else {
		//findByName
		var query = {'name':params['name']};
		db.findByName(query,function(err,users){
		if(err)res.send(err);
		//输出JSON String 会有转义符‘\’
		//var str = JSON.stringify(users); 
		res.send(users);
		});
	}
});


server.del('/user', function create(req,res,next){
	
	var jsonParams = req.params;
	
	if (jsonParams.name == undefined) {
		console.log('InvalidArgumentError Name must be supplied');
        return next(new restify.InvalidArgumentError('Name must be supplied'));
    }
	var user_del = {'name':jsonParams.name};
	db.deleteUser(user_del,function(err){
		if(err){
			res.send(err);
		}else{
			res.send(204,{'result':'OK'});
		}
	});
	
	return next();
});


server.put('/user', function create(req,res,next){
	var jsonParams = req.params;
	
	if (jsonParams.name_old == undefined || jsonParams.name_new == undefined) {
		console.log('InvalidArgumentError Name must be supplied');
        return next(new restify.InvalidArgumentError('Name must be supplied'));
    }
	var user_update = {'name_old':jsonParams.name_old,'name_new':jsonParams.name_new};
	db.updateUser(user_update,function(err){
		if(err){
			res.send(err);
		}else{
			res.send({'result':'OK'});
		}
	});
});



server.listen(8080, '127.0.0.1',function() {
  console.log('%s listening at %s', server.name, server.url);
});
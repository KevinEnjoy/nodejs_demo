var mongoose = require("mongoose");
var DB_URL = 'mongodb://192.168.1.183:27017/lemon';



var db = mongoose.connection;    

//创建模式和模型
var userSchema = new mongoose.Schema({
		name:String,
		age:Number
	});
	//使用userSchema作为结构编译一个'User'模型    
	//Mongoose同时也会创建一个叫做'User'的MongoDB集合用来存放这些文档
	//将Schema发布为Model
var User = mongoose.model('User', userSchema);

db.on('error',console.error);
db.once('open',function(){
	console.log('connect mongodb success!');

});   



exports.world = function(){
	console.log('Hello World');
	return 'this is db';
}
exports.find = function(callback){
	console.log('find all');
	//查询所有文档数据
	var str = '';
	User.find(function(err,users){
		if(err)return console.err(err);
		
		//str = JSON.stringify(users); 
		//console.log(str);
		callback(users);
		return users;
	});
}



exports.findByName = function(query,callback){
	console.log('findByName');
	//通过名字查询文档数据
	User.find(query,function(err,users){
		
		callback(err,users);
	});
}

exports.addUser = function(query,callback){
	console.log('addUser');
		//User(Model)的实例Entity
	var sam = new User({
		name:query.name,
		age:query.age
	});
	
	
	//新增一个文档
	sam.save(function(err,sam){
		callback(err,sam);
	});
}

mongoose.connect(DB_URL);   
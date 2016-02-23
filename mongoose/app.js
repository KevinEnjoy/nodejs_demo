var mongoose = require("mongoose");
var DB_URL = 'mongodb://192.168.1.183:27017/lemon';

var db = mongoose.connection;    

db.on('error',console.error);
db.once('open',function(){
    //在这里创建你的模式和模型
	console.log('connect success!');
	
	var userSchema = new mongoose.Schema({
		name:String,
		age:Number
	});
	//使用userSchema作为结构编译一个'User'模型    
	//Mongoose同时也会创建一个叫做'User'的MongoDB集合用来存放这些文档
	//将Schema发布为Model
	var User = mongoose.model('User', userSchema);

	//User(Model)的实例Entity
	var sam = new User({
		name:'tinmo',
		age:'11'
	});
	
	//新增一个文档
	sam.save(function(err,sam){
		if(err)return console.log(err);
		console.log(sam);
	});
	
	//查询所有文档数据
	User.find(function(err,users){
		if(err)return console.err(err);
		console.log(users);
	});
	
	//通过名字查询文档数据
	User.find({name:'sam'},function(err,users){
		if(err)return console.err(err);
		console.log(users);
	});
	
	
});   

mongoose.connect(DB_URL);   
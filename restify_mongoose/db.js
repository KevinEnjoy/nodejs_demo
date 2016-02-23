var mongoose = require("mongoose");
var DB_URL = 'mongodb://192.168.1.183:27017/lemon';



var db = mongoose.connection;    

//����ģʽ��ģ��
var userSchema = new mongoose.Schema({
		name:String,
		age:Number
	});
	//ʹ��userSchema��Ϊ�ṹ����һ��'User'ģ��    
	//MongooseͬʱҲ�ᴴ��һ������'User'��MongoDB�������������Щ�ĵ�
	//��Schema����ΪModel
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
	//��ѯ�����ĵ�����
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
	//ͨ�����ֲ�ѯ�ĵ�����
	User.find(query,function(err,users){
		
		callback(err,users);
	});
}

exports.addUser = function(query,callback){
	console.log('addUser');
		//User(Model)��ʵ��Entity
	var sam = new User({
		name:query.name,
		age:query.age
	});
	
	
	//����һ���ĵ�
	sam.save(function(err,sam){
		callback(err,sam);
	});
}

mongoose.connect(DB_URL);   
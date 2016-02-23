var mongoose = require("mongoose");
var DB_URL = 'mongodb://192.168.1.183:27017/lemon';

var db = mongoose.connection;    

db.on('error',console.error);
db.once('open',function(){
    //�����ﴴ�����ģʽ��ģ��
	console.log('connect success!');
	
	var userSchema = new mongoose.Schema({
		name:String,
		age:Number
	});
	//ʹ��userSchema��Ϊ�ṹ����һ��'User'ģ��    
	//MongooseͬʱҲ�ᴴ��һ������'User'��MongoDB�������������Щ�ĵ�
	//��Schema����ΪModel
	var User = mongoose.model('User', userSchema);

	//User(Model)��ʵ��Entity
	var sam = new User({
		name:'tinmo',
		age:'11'
	});
	
	//����һ���ĵ�
	sam.save(function(err,sam){
		if(err)return console.log(err);
		console.log(sam);
	});
	
	//��ѯ�����ĵ�����
	User.find(function(err,users){
		if(err)return console.err(err);
		console.log(users);
	});
	
	//ͨ�����ֲ�ѯ�ĵ�����
	User.find({name:'sam'},function(err,users){
		if(err)return console.err(err);
		console.log(users);
	});
	
	
});   

mongoose.connect(DB_URL);   
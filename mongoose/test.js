var mongoose = require("mongoose");

var db = mongoose.connection;    

db.on('error',console.error);
db.once('open',function(){
    //�����ﴴ�����ģʽ��ģ��
	console.log('connect success!');
});   

mongoose.connect('mongodb://192.168.1.183:27017/lemon');   
var mongoose = require("mongoose");

var db = mongoose.connection;    

db.on('error',console.error);
db.once('open',function(){
    //在这里创建你的模式和模型
	console.log('connect success!');
});   

mongoose.connect('mongodb://192.168.1.183:27017/lemon');   
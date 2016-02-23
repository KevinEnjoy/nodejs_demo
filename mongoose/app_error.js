
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://192.168.1.183:27017','lemon'); //创建一个数据库连接

db.on('error',console.error);
db.once('open',function(){
	
	console.log('connect success!');
});

console.log('end!');

/**
kevinwen@ThinkPad-E431 MINGW64 /e/nodejs/mongoose
$ node app_error.js
end!
{ [MongoError: connect ENOENT mongodb://192.168.1.183:27017]
  name: 'MongoError',
  message: 'connect ENOENT mongodb://192.168.1.183:27017' }

kevinwen@ThinkPad-E431 MINGW64 /e/nodejs/mongoose

*/
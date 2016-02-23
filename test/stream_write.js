var fs = require("fs");
var data = '这是stream write 文件写入的数据';

var ws = fs.createWriteStream('output.txt');

ws.write(data,'UTF8');

ws.end();

ws.on('finish',function(){
	console.log("write finish.");
});

ws.on('',function(err){
	console.log(err.stack);
});

console.log("end.");
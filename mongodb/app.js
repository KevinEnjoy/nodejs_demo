var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://192.168.1.183:27017/lemon';   
//var DB_CONN_STR = 'mongodb://user_demo:123@ds055555.mongolab.com:55555/lemon';    
var DB_COLLECTION = 'user'

var insertData = function(db, callback) {  
    //连接到表  
    var collection = db.collection(DB_COLLECTION);
    //插入数据
    var data = [{"name":'wilson001',"age":21},{"name":'wilson002',"age":22}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}
var findData = function(db, callback) {  
  //连接到表  
  var collection = db.collection(DB_COLLECTION);
  //查询所有数据
  collection.find().toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
var selectData = function(db, callback) {  
  //连接到表  
  var collection = db.collection(DB_COLLECTION);
  //条件查询数据
  var whereStr = {"name":'wilson001'};
  collection.find(whereStr).toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}

var updateData = function(db, callback) {  
    //连接到表  
    var collection = db.collection(DB_COLLECTION);
    //更新数据
    var whereStr = {"name":'wilson001'};
    var updateStr = {$set: { "age" : 100 }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}

var delData = function(db, callback) {  
  //连接到表  
  var collection = db.collection(DB_COLLECTION);
  //删除数据
  var whereStr = {"name":'wilson001'};
  collection.remove(whereStr, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
	
		if(err){
            console.log('Error:'+ err);
            return;
        }
    console.log("connect success!");
	/**
	delData(db,function(result){
	console.log('----------------start delete data----------------');
	console.log(result);
	});
	
	findData(db,function(result){
			console.log(result);
			db.close();
	});
	
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
	*/
	insertData(db, function(result) {
        console.log(result);
        db.close();
    });
	
});
var http = require("http");            //提供web服务  
var url = require("url");            //解析GET请求  
var query = require("querystring");    //解析POST请求


var server = function(request,response){  
    //定义报文头
    response.writeHead(200,{"Content-Type":"text/json"});
    //判断是GET/POST请求
    if(request.method == "GET"){
        var params = [];
        params = url.parse(request.url,true).query;
        params['fruit'] = compute(params);
        response.write(JSON.stringify(params));
        response.end();
    }else{
        var postdata = "";
        request.on("data",function(postchunk){
            postdata += postchunk;
        })

        //POST结束输出结果
        request.on("end",function(){
            var params = query.parse(postdata);
            params['fruit'] = compute(params);
            response.write(JSON.stringify(params));
            response.end();
        })
    }

}

//计算
var compute = function(params){  
    switch(params['type']){
        case "add": return parseFloat(params['num_one']) + parseFloat(params['num_two']);break;
        case "subtract": return parseFloat(params['num_one']) - parseFloat(params['num_two']);break;
        case "multiplication": return parseFloat(params['num_one']) * parseFloat(params['num_two']);break;
        case "division": return parseFloat(params['num_one']) / parseFloat(params['num_two']);break;
    }
}

//开启服务在127.0.0.1:8080
http.createServer(server).listen(8080);  
console.log("Server start!");  
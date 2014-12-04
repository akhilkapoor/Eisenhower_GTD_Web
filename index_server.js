
var http = require('http'),
    util = require('util'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring');

var server = http.createServer(function (req,res){
                            
    var url_parts = url.parse(req.url,true);
    //console.log(url_parts);
    
    var body = '';
    if (req.method === 'GET') {
		//console.log('Request found with GET method');     
		req.on('data',function(data){ res.end(' data event: '+data);});
		if(url_parts.pathname == '/list/IU')
			fs.readFile('./IU.html',function(error,data){
				if (error) throw error;		
				console.log('Serving the page IU.html');
				res.end(data);    
			});
		else if(url_parts.pathname == '/list/InU')
			fs.readFile('./InU.html',function(error,data){
				if (error) throw error;		
				console.log('Serving the page InU.html');
				res.end(data);    
			});
		else if(url_parts.pathname == '/list/nIU')
			fs.readFile('./nIU.html',function(error,data){
				if (error) throw error;		
				console.log('Serving the page nIU.html');
				res.end(data);    
			});
		else if(url_parts.pathname == '/list/nInU')
			fs.readFile('./nInU.html',function(error,data){
				if (error) throw error;		
				console.log('Serving the page nInU.html');
				res.end(data);    
			});
		else
			fs.readFile('./index.html',function(error,data){
				if (error) throw error;		
				//console.log('Serving the page index.html');
				res.end(data);    
			});
		
	}

});
server.listen(1337);
console.log('Server listening at localhost:1337');

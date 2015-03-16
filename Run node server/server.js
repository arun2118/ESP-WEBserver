//-- Libraries --
var http = require('http');
var fs = require('fs');
var url = require('url');

//-- Global variables --
var serverIP = '192.XXX.X.XX'; 
var apiPort = 8081;

//-- HTMServer --
http.createServer(function (req, res) {
  var reqUrl = url.parse(req.url);
  var pathName = reqUrl.pathname;

  //-- Dumb router --
  if (pathName.substring(0,1)=='/') pathName = pathName.substring(1);
  if (pathName=="") pathName = "index.html";

  switch(pathName) {
  

	  
	case 'a':
	  //-- API page --
	  console.log("a page requested");
	  res.writeHead(200, {'Content-Type': 'text/json'});
	  SetDataOnESP(0, res);
	  break;
	  
	case 'b':
	  //-- API page --
	  console.log("b page requested");
	  res.writeHead(200, {'Content-Type': 'text/json'});
	  SetDataOnESP(1, res);
	  break;
	  
	  
	 case 'c':
	  //-- API page --
	  console.log("c page requested");
	  res.writeHead(200, {'Content-Type': 'text/json'});
	  SetDataOnESP(2, res);
	  break;
	  
	case 'd':
	  //-- API page --
	  console.log("d page requested");
	  res.writeHead(200, {'Content-Type': 'text/json'});
	  SetDataOnESP(3, res);
	  break; 
	  
    case 'e':
	  //-- API page --
	  console.log("e page requested");
	  res.writeHead(200, {'Content-Type': 'text/json'});
	  SetDataOnESP(4, res);
	  break; 

    case 'f':
	  //-- API page --
	  console.log("f page requested");
	  res.writeHead(200, {'Content-Type': 'text/json'});
	  GetDataFromESP(res);
	  break; 	  

	 
	  
    default:
	  fs.readFile(pathName, 'utf8', function(err,data) {
		if (err) {
		  return console.log(err);
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	  });
	break;
	
  }
}).listen(8081,serverIP);
console.log('Server running at http://' + serverIP + ':8081/');

/*  function GetDataFromESP(res)
{
	var result = '';
	
	//-- Get page --
	var http = require('http');

	var options = {
	  host: "192.168.1.79",
	  port: 8081,
	  path: '',
	  method: 'GET'
	};
	
	http.get( options, function(response) {
	  console.log("got response: " + response.statusCode);
	  
	  response.on('data', function(d) { result += d});
	  
	  response.on('end', function() { 
	    console.log("BODY: " + result)
		res.end( result );
	  });
	});
}  */


function SetDataOnESP(ledValue, res)
{
	var result = '';
	
	//-- Get page --
	var http = require('http');

	var options = {
	  host: "192.168.1.79",
	  port: 8081,
	  path: '/set?b=' + ledValue,
	  method: 'GET'
	};	
	
	http.get( options, function(response) {
	  console.log("got response: " + response.statusCode);
	  
	  response.on('data', function(e) { result += e});
	  
	  response.on('end', function() { 
	    console.log("BODY: " + result)
		res.end( result );
	  });
	});
}
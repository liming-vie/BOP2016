var http = require('http');
var querystring = require('querystring');

var contents = '';

var options = {
    host: 'api.projectoxford.ai',
    path: '/academic/v1.0/evaluate?expr=Id=2030985472&model=latest&count=10&offset=0&attributes=Id,AA.AuId',
    method: 'GET',
    headers: {
	"Content-Type": 'application/json',  
        "Content-Length": contents.length,
	'Ocp-Apim-Subscription-Key' : '71ec020289c74a5ca9ff1093851bbf3c'
    }
};

function begin() {
var start_time = new Date().getTime();
var end_time;
var req = http.request(options, function (res) {  
    console.log('STATUS: ' + res.statusCode);  
    console.log('HEADERS: ' + JSON.stringify(res.headers));  
    res.setEncoding('utf8');  
	end_time = new Date().getTime() - start_time;
	console.log('time: ' + end_time);
    res.on('data', function (chunk) { 
        console.log('BODY: ' + chunk);  
    });  
});  
req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  
req.end();  
}
  
  
begin();

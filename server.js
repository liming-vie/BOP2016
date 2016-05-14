var fs = require("fs");
var bfs = undefined;
fs.readFile('./config.json', function(err, data) {
  if(err) {
    return console.error(err);
  }
  else {
    // CONFIGURE
    console.log(data.toString());
    data = JSON.parse(data.toString());
    bfs = require(data['bfs']);
  }
});

var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
  var urlobj = url.parse(req.url, true);
  var paths = bfs.start(parseInt(urlobj.query.id1), parseInt(urlobj.query.id2));
  res.end(JSON.stringify(paths));
}).listen(80);

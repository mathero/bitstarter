var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

//function readContent(callback) {
 //   fs.readFile("index.html", function (err, content) {
  //      if (err) return callback(err)
   //     callback(content)
   // })
//}

//readContent(function (content) {
// console.log(content)

//})

var content = fs.readFileSync('index.html', 'utf-8');
console.log(content)

app.get('/', function(request, response) {
  response.send(content);
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

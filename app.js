var express = require('express');

var app = express();

app.use(express.static('./'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(5000, function(){
    console.log("listening to port 5000");
});
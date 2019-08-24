var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', function(request,response){
   response.send("<form action=\"/blog\" method=\"get\"><input type=\"text\" name=\"username\"><input type=\"submit\"></form>"
 );
});

app.get('/blog', function(request,response){
  var username = request.query.username;
   response.send(username);
});

app.get('/hell', function(request,response){
  var username = request.query.username;
   response.render('index.ejs',{});
});

app.listen(8080);

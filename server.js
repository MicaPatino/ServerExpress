const express = require('express');
const app = express();
const path =require('path')

 
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/index.html'));
  
});
app.get('/productos', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/productos.html'));
  
});

app.listen(3000, function() {
  console.log('server express ready!');
});



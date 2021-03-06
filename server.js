var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js');

//req = request, res = response
// get responds to the http request method
//Routing...
//app.use(middleware.requireAuthentication); //Global
app.use(middleware.logger);  //Global
app.get('/about', middleware.requireAuthentication, function (req, res) {
    
    res.send('About Us');
} );

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Express server started on port ' + PORT);
});

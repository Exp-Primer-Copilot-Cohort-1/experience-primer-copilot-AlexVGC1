// create web server
// create web server
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/comments', function(req, res) {
    res.send('Hello World!');
});
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
// Path:
var express = require('express');
var path = require('path');

app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index', { title: 'GitHub Search' });
});

module.exports = app;
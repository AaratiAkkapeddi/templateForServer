var express = require('express'),
    server = express(),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    ObjectID = require('mongodb').ObjectID,
    url = 'mongodb://localhost:27017/myDB', //name DB here
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    port = 3000;

    mongoose.connect('mongodb://localhost/myDB');
    var db = mongoose.connection;
    db.on('open', function(){
        server.listen(port);
        server.db = db;
        console.log('Ready For Action');
    });

/*<><><>MIDDLEWARE<><><><><>*/
server.use(express.static('./public'));
server.use(methodOverride('_method'));

server.set('views', './views');
server.set('view engine', 'ejs');

server.use(bodyParser.urlencoded({extended:true}));

//controllers
var myController = require('./controllers/myController.js');
server.use('/someRoute', myController);


/*<><><><><><><><><><><><><>*/

var express = require('express'),
    server = express(),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    ObjectID = require('mongodb').ObjectID,
    url = 'mongodb://localhost:27017/myDB', //name DB here
    session = require('express-session'),
    methodOverride = require('method-override'),
    myModel = require('./models/mySchema.js'),
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

server.use(session({
 secret: 'aarati',
 resave: false,
 saveUninitialized: false
}));

server.use(bodyParser.urlencoded({extended:true}));


server.get('/', function(req,res,next){
  res.render('welcome', {
    sessionName: req.session.Name || 'who?',
    sessionColor: req.session.Color || 'blue'
  });
});

server.get('/myForm', function(req,res,next){
  res.render('myForm');
});

server.get('/login', function(req,res,next){
  res.render('login');
});


server.post('/', function(req,res,next){
    console.log('im doing the wrong poost');
   // req.session.Name = req.body.name;
   // res.redirect(301, '/');
   console.log(req.body.person);
   myModel.create(req.body.person, function (err, item) {
    console.log(item);
    if (err) {
      console.log(err);
    } else {
      res.redirect(301, "/login");
    }
  });

});


server.post('/login', function(req,res,next){
    console.log('imdoing');
    console.log(req.body.login.name);
   myModel.findOne({name: req.body.login.name}, function(err,myPerson){
    console.log('person',myPerson);
    if(myPerson){
     req.session.Name = myPerson.name;
     req.session.Color = myPerson.color;
     res.redirect(301, "/");
    } else{
     res.redirect(301,'/myForm');
    }
});
   });
   

      
    

//controllers
var myController = require('./controllers/myController.js');
server.use('/someRoute', myController);


/*<><><><><><><><><><><><><>*/

        


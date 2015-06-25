var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


  /*<><><><>DEFINE SCHEMA<><><><><>*/
  var theSchema = mongoose.Schema({
   name:String,
   color:String
 });

 var mySchema = mongoose.model('myObj', theSchema);


/*<><><><><>EXPORT AT THE END<><><><><>*/

module.exports = mySchema;

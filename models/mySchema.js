var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


  /*<><><><>DEFINE SCHEMA<><><><><>*/
  var theSchema = mongoose.Schema({
   
 });

 var mySchema = mongoose.model('myObj', theSchema);


/*<><><><><>EXPORT AT THE END<><><><><>*/

module.exports = theSchema;

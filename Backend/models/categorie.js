var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  title : String,
  description : String,
  
  boutiques: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Boutique'
	}]
  

});

module.exports = mongoose.model('Categorie', CategorieSchema);

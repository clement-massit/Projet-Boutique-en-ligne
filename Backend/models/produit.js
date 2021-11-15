var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  title : String,
  description : String,
  price : Number,
  categories: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Categorie'
	}]
  
});

module.exports = mongoose.model('Produit', ProduitSchema);

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BoutiqueSchema = new Schema({
  title : String,
  description : String,
  });

module.exports = mongoose.model('Boutique', BoutiqueSchema);
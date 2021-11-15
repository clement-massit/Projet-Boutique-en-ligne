function createBoutique(req, res) {
    let Boutique = require('../models/boutique');
    let newBoutique = Boutique ({
        title: req.body.title,
        description : req.body.description
    });
  
    newBoutique.save()
    .then((savedBoutique) => {

        //send back the created Boutique
        res.json(savedBoutique);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readBoutiques(req, res) {

    let Boutique = require("../models/boutique");

    Boutique.find({})
    .then((boutiques) => {
        res.status(200).json(boutiques);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readBoutique(req, res) {

    let Boutique = require("../models/boutique");

    Boutique.findById({_id : req.params.id})
    .then((boutique) => {
        res.status(200).json(boutique);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateBoutique(req, res) {

    let Boutique = require("../models/boutique");

    Boutique.findByIdAndUpdate({_id: req.params.id}, 
        {title : req.body.title, 
        description : req.body.description}, 
        {new : true})
    .then((updatedBoutique) => {
        res.status(200).json(updatedBoutique);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteBoutique(req, res) {

    let Boutique = require("../models/boutique");

    Boutique.findOneAndRemove({_id : req.params.id})
    .then((deleteBoutique) => {
        res.status(200).json(deleteBoutique);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {

    let Boutique = require("../models/boutique");

    Boutique.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updateBoutique) => {
        res.status(200).json(updateBoutique);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let Boutique = require("../models/boutique");

    Boutique.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updateBoutique) => {
        res.status(200).json(updateBoutique);
    }, (err) => {
        res.status(500).json(err);
    });

}

module.exports.create = createBoutique;
module.exports.reads = readBoutiques;
module.exports.read = readBoutique;
module.exports.delete = deleteBoutique;
module.exports.update = updateBoutique;
module.exports.done = done;
module.exports.undone = undone;

//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/produit');

//CREATE
router.post("/produit", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/produits", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/produit/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/produit/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/produit/:id", (req, res) => {
    
    controller.delete(req, res);

});

//COMPLETED
router.post("/produit/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/produit/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;
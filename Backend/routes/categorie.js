//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/categorie');

//CREATE
router.post("/categorie", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/categories", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/categorie/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/categorie/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/categorie/:id", (req, res) => {
    
    controller.delete(req, res);

});

//COMPLETED
router.post("/categorie/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/categorie/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;
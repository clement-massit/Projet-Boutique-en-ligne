//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/boutique');

//CREATE
router.post("/boutique", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/boutiques", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/boutique/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/boutique/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/boutique/:id", (req, res) => {
    
    controller.delete(req, res);

});

//COMPLETED
router.post("/boutique/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/boutique/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;
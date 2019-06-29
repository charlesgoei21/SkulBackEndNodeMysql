const express           = require('express');
const router            = express.Router();
const mapelController   = require('../Controller/mapelController');
const multer            = require('multer');
const multParse         = multer();

router.get("/",       mapelController.mapel);
router.get("/:id",    mapelController.cariMapel);
router.post("/",      multParse.none(),mapelController.tambahMapel);
router.put('/:id',    multParse.none(),mapelController.updateMapel);
router.delete('/:id', mapelController.deleteMapel);

module.exports          = router;
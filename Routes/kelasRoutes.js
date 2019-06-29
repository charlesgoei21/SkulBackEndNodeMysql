const express            = require('express');
const router             = express.Router();
const kelasController    = require('../Controller/kelasController');
const multer             = require('multer');
const multParse          = multer();

router.get("/",         kelasController.kelas);
router.get("/:id",      kelasController.cariKelas);
router.post("/",        multParse.none(),kelasController.tambahKelas);
router.put('/:id',      multParse.none(),kelasController.updateKelas);
router.delete('/:id',   kelasController.deleteKelas);

module.exports          = router;
const express           = require('express');
const router            = express.Router();
const guruController    = require('../Controller/guruController');
const multer            = require('multer');
const multParse         = multer();
const gcsSharp          = require('multer-sharp');
const storage           = multer.diskStorage({
                            destination : (req, imgGuru, cb) => {
                          cb(null, './Public/images/guru');
                        },
                          filename : (req, imgGuru, cb) =>{
                          cb(null, req.body.nama + '.' + 'jpg');
                        },
                        size: {
                          width: 400,
                          height : 400
                        }
                                            });

const upload            = multer({storage:storage});


router.get('/',     guruController.users);
router.get('/:nip', guruController.cariGuru);
router.post("/",    upload.single('imgGuru'), guruController.tambahGuru);
router.put("/:nip", upload.single('imgGuru'), guruController.updateGuru);

module.exports = router;
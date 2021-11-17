var express = require('express');
const guitar_controlers= require('../controllers/guitar');
var router = express.Router();

/* GET bottle */

router.get('/', guitar_controlers.guitar_view_all_Page );
router.get('/guitar/:id', guitar_controlers.guitar_detail);
module.exports = router;
/* GET detail costume page */ 
router.get('/detail', guitar_controlers.guitar_view_one_Page);
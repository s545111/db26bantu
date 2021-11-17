var express = require('express');
const guitar_controlers= require('../controllers/guitar');
var router = express.Router();

/* GET bottle */

router.get('/', guitar_controlers.guitar_view_all_Page );
router.get('/guitar/:id', guitar_controlers.guitar_detail);
/* GET detail Guitar page */ 
router.get('/detail', guitar_controlers.guitar_view_one_Page);
/* GET create Guitar page */ 
router.get('/create', guitar_controlers.guitar_create_Page);
/* GET create update page */ 
router.get('/update', guitar_controlers.guitar_update_Page); 
/* GET create costume page */ 
router.get('/delete', guitar_controlers.guitar_delete_Page); 
module.exports = router;


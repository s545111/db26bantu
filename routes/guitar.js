var express = require('express');
const guitar_controlers= require('../controllers/guitar');
var router = express.Router();

/* GET bottle */

router.get('/', guitar_controlers.guitar_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('guitar', { title: 'Search Results guitar' });
});

module.exports = router;
// GET request for one costume.
router.get('/guitar/:id', guitar_controller.guitar_detail);
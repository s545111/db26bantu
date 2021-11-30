var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var guitar_controller = require('../controllers/guitar');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// guitar ROUTES ///
// POST request for creating a guitar.
router.post('/resource/guitar', guitar_controller.guitar_create_post);
// DELETE request to delete guitar.
router.delete('/resource/guitar/:id', guitar_controller.guitar_delete);
// PUT request to update guitar.
router.put('/resource/guitar/:id', guitar_controller.guitar_update_put);
// GET request for one guitar.
router.get('/resource/guitar/:id', guitar_controller.guitar_detail);
// GET request for list of all guitar items.
router.get('/resource/guitar', guitar_controller.guitar_list);
/* GET update guitar page */ 
router.get('/update', guitar_controlers.guitar_update_Page);
module.exports = router;
var Guitar = require('../models/guitar');
// List of all Guitars
exports.guitar_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas list');
};
// for a specific Guitar.
exports.guitar_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas detail: ' + req.params.id);
};
// Handle Guitar create on POST.
exports.guitar_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Guitar();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"GBrand":"yamaha", "Gcolor":Blue", "Gcost":500}
    document.GBrand = req.body.GBrand;
    document.Gcolor = req.body.Gcolor;
    document.GCost = req.body.GCost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Guitar delete form on DELETE.
exports.guitar_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Guitar delete DELETE ' + req.params.id);
};
// Handle Guitar update form on PUT.
exports.guitar_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Guitar update PUT' + req.params.id);
};

// List of all Guitars
exports.guitar_list = async function (req, res) {
    try {
        theGuitar = await Guitar.find();
        res.send(theGuitar);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.guitar_view_all_Page = async function (req, res) {
    try {
        theGuitar = await Guitar.find();
        res.render('guitar', {
            title: 'Guitar Search Results',
            results: theGuitar
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
var express = require('express');
var Shops = require('../models/shops');

var router = express.Router();

router.get('/:city', function (req, res) {
    var city = req.params.city;
    Shops.retrieveAll(function (err, shops) {
        if (err)
            return res.json(err);
        return res.json(shops);
    },city);
});

router.post('/', function (req, res) {
    var shop = req.body.shop;

    Shops.insert(shop, function (err, result) {
        if (err)
            return res.json(err);
        return res.json(result);
        
    });
});
router.post('/singup',)

module.exports = router;
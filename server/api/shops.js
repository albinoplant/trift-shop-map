var express = require('express');
var Shops = require('../models/shops');

var router = express.Router();

router.get('/', function (req, res) {
    Shops.retrieveAll(function (err, shops) {
        if (err)
            return res.json(err);
        return res.json(shops);
    });
});

router.post('/', function (req, res) {
    var shop = req.body.shop;

    Shops.insert(shop, function (err, result) {
        if (err)
            return res.json(err);
        return res.json(result);
        
    });
});

module.exports = router;
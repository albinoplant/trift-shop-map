const db = require('../database');

class Shops {
    static retrieveAll (/*shop,*/callback) {
        db.query('SELECT * FROM shops'/*'SELECT ROW_TO_JSON(shops) FROM shops WHERE shops=${1};', [shop]*/, (err, res) => {
                if (err.error)
                    return callback(err);
                callback(res);
        });
    }

    static insert (shop, callback) {
        db.query('INSERT INTO shops VALUES (NULL,${1},${2},${3},${4},${5})',[shop.name, shop.workingHours, shop.pricePerKilo, shop.geo, shop.city]);
    }
}

module.exports = Shops;
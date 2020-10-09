const fs = require('fs');
let products = JSON.parse(fs.readFileSync(__dirname + "/../database/productsDataBase.json"));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: function(req, res) {
        res.render('home',{products});
      }
}

module.exports = mainController;
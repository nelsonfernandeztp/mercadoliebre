var express = require('express');
var router = express.Router();
const userController = require("../controllers/productController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/vistaProducto', productController.vistaProducto);


module.exports = router;

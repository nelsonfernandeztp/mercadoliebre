var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

// todos los prod
router.get('/', productController.index);

//alta prod
router.get("/create", productController.create);
router.post("/create", productController.store);
//editar prod
router.get("/edit/:id", productController.edit);
router.post("/edit/:id", productController.update);


//detalle de prod
router.get('/:id', productController.productDetail);
//borrar prod
router.post("/:id", productController.destroy);


module.exports = router;

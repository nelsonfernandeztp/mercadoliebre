const fs = require('fs');
let products = JSON.parse(fs.readFileSync(__dirname + "/../database/productsDataBase.json"));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
    index: function (req, res, next) {
        res.render("/product/product-index", {products})
    },
    create: function (req, res, next) {
        res.render('products/product-create');
    },
    store: function (req, res, next) {
        let newProduct = req.body;
        newProduct.price = Number(req.body.price);
        newProduct.discount = Number(req.body.discount);
        if(products.length>0){
            lastId = products[products.length-1].id;
            newProduct.id = lastId +1;
        }else{
            newProduct.id = 1;
        }
        products.push(newProduct);
        fs.writeFileSync(__dirname + "/../database/productsDataBase.json", JSON.stringify(products));
        res.send("producto cargado")
    },
    edit: function (req, res, next) {
        let productFind;
        products.forEach(function(product){
            if(product.id == req.params.id){
                productFind = product;
            }
        });
        if(productFind){
            res.render('products/product-edit', {product:productFind});
        }else{
            res.send("no existe");
        }
        
    },
    update: function (req, res, next) {
        products.forEach(function(product){
            if(product.id == req.params.id){
                product.name = req.body.name;
                product.description = req.body.description;
                product.price = req.body.price;
                product.discount = req.body.discount;
                product.image = req.body.image;
            }
        });
        res.send("actualizado")
    },
    destroy: function (req, res, next) {

    },
    productDetail: function (req, res, next) {
        res.render('products/product-detail', { products });
    },

}
module.exports = productController;
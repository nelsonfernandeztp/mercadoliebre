var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/registro', userController.register);
router.post('/registro', userController.recibirRegister);

router.get('/login', userController.login);
router.post('/login', userController.recibirLogin);

router.get('/perfil', userController.perfil);

module.exports = router;

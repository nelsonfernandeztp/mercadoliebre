const userController = {
    register: function(req, res, next) {
        res.render('registro');
      },
      recibirRegister: function (req,res,next){
        var usuario = req.body;
        res.render("perfil", {usuario: usuario})
      },
      login: function(req, res, next) {
        res.render('login');
      },
      recibirLogin: function (req,res,next){
        var usuario = req.body.usuario;
        res.render("perfil", {usuario:usuario})
      },
      perfil: function (req,res,next){
          res.render("perfil");
      }
}

module.exports = userController;
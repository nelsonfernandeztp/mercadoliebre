const userController = {
    register: function(req, res, next) {
        res.render('users/register');
      },
      sendRegister: function (req,res,next){
        var usuario = req.body;
        res.render("users/profile", {usuario: usuario})
      },
      login: function(req, res, next) {
        res.render('users/login');
      },
      sendLogin: function (req,res,next){
        var usuario = req.body.usuario;
        res.redirect("users/profile", {usuario:usuario})
      },
      profile: function (req,res,next){
          res.render("users/profile");
      }
}

module.exports = userController;
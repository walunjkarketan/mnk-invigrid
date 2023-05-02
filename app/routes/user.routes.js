const users = require("../controllers/user.controller.js");
  
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/signup", users.signup );

  app.post("/sign-in", users.signIn );

};

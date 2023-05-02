// Create a nodejs server for file transfer.
// -> Create a nodejs server with a get route to serve a pdf file to the user.
// -> multiple users should be able to get different pdfs.
// -> e.g 
// 	-> user A and user B are there.
// 	-> pdf A and pdf B are there. 
// 	-> user A should be served with pdf A and not pdf B.
// 	-> user B should be served with pdf B and not pdf A. 
// 	-> Put some basic authentication wrt user and server files accordingly.


// express.js 
// database : mysql

// create simple node app with package.json 
// connection with database
// sequlize orm create user and file entity there
//jwt authentication
// create controllers
// create user
// upload file by user
// fetch the file by user

const express = require("express");
const cors = require("cors");
const multer = require('multer');
const app = express();
const db = require("./app/models");


app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Invi Grid Inc." });
});
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  require('./app/routes/user.routes')(app);
  require('./app/routes/file.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});





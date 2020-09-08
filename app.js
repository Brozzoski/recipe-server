//! ENV
require("dotenv").config();
let bcrypt = require("bcryptjs");
//! EXPRESS
const express = require("express");
const app = express();
//! CONTROLLERS
const list = require("./controller/listcontroller");
const recipe = require("./controller/recipecontroller");
const user = require("./controller/userscontroller");
//! DATABASE
const sequelize = require("./db");
sequelize.sync();
// sequelize.sync({force: true})
app.use(express.json());
app.use(require("./middleware/headers"));
//! ROUTES
app.use("/collection", collection);
app.use("/post", post);
app.use("/user", user);
app.listen(process.env.PORT, function () {
  console.log(`**** App is listening on ${process.env.PORT} *********`);
});
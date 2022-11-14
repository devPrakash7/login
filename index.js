const express = require("express");
const app = express();
// dotenv file require
require("dotenv").config();
// my port number
const port = process.env.PORT  || 3001;
// require mongoose library
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(require("./router/rout"));

//mongoose connect

mongoose
  .connect("mongodb+srv://mongodb234:mUq9xteNtoEopnf5@cluster0.31ehm7s.mongodb.net/group", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log("no connected");
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

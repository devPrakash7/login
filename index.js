const express = require("express");
const app = express();
// my port number
const port = process.env.PORT  || 3000;
// require mongoose library
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(require("./router/rout"));

//mongoose connect

mongoose
  .connect("mongodb+srv://root:<72472633>@cluster0.lg9hi.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log("no connected");
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const authorModel = require("../models/authorModel.js");
const jwt = require("jsonwebtoken");

//Creating Author documents by validating the details.
const createAuthor = async function (req, res) {
  try {
    // Request body verifying
    let requestBody = req.body;

    //Extract body params
    const { fname, lname, title, email, password } = requestBody;
    
    if (!validator.isValid(password)) {
      return res
        .status(400)
        .send({ status: false, message: `Password is required` });
    }
  
    const newAuthor = await authorModel.create(requestBody);
    return res
      .status(201)
      .send({
        status: true,
        message: `Author created successfully`,
        data: newAuthor,
      });
  } catch (error) {
    res.status(500).send({ status: false, Error: error.message });
  }
};

//Login author Handler - Author won't be able to login with wrong credentials.
const loginAuthor = async function (req, res) {
  try {
    const requestBody = req.body;

    //Extract params
    let { email, password } = requestBody;

    const findAuthor = await authorModel.findOne({ email, password }); //finding author details in DB to get a match of the provided Email and password.

    //creating JWT
    let token = jwt.sign({ authorId: findAuthor._id }, process.env.SECRET_KEY);
    res.header("x-api-key", token);
    return res
      .status(201)
      .send({
        status: true,
        message: `Author login successfully`,
        data: { token },
      });
  } catch (error) {
    res.status(500).send({ status: false, Error: error.message });
  }
};

module.exports = {
  createAuthor,
  loginAuthor,
};

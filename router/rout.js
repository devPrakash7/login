
const express = require('express');
const router = express.Router();
const authorController = require('../Controllers/newAuthorController')



//Author routes
router.post('/authors', authorController.createAuthor)
router.post('/login', authorController.loginAuthor)



module.exports = router;
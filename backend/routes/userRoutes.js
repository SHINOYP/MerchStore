const express = require("express");
const {
    signUpUser,
    logInUser
  } = require("../controller/userController");


  //router  object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post("/register", signUpUser);
router.post("/login",  logInUser);


module.exports = router;
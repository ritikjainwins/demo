const express = require("express");
const router = express.Router();
const Users = require("../controllers/usersController");

router.route("/singup").post(Users.createUser);
router.route("/login").get(Users.logInUser);


module.exports = router;
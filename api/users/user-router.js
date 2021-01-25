const router = require("express").Router();
const protected = require("../auth/auth-middleware.js");
const Users = require("./user-model.js");

router.get("/", protected, (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

module.exports = router;

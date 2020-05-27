var express = require("express");
var router = express.Router();
const bodyParser = require('body-parser');
const User = require("../model/user");

router.use(bodyParser.json());
/* GET users listing. */
router
  .route("/")
  .get((req, res, next) => {
    User.find({})
      .then(
        (users) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(users);
        },
        (err) => next(err)
      )
      .catch((Err) => {
        next(err);
      });
  })
  .post((req, res, next) => {
    User.create(req.body)
      .then(
        (user) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(user);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Can not allow PUT method");
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.end("Can not allow PUT method");
  });

module.exports = router;

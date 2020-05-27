const express = require("express");
const bodyParser = require("body-parser");

const questionRouter = express.Router();

const Questions = require("../model/questions");
const Answers = require("../model/answers");

questionRouter.use(bodyParser.json());

questionRouter
  .route("/")
  .get((req, res, next) => {
    Questions.find({})
      .then(
        (questions) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(questions);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .post((req, res, next) => {
    Questions.create(req.body)
      .then(
        (question) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(question);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Cannot apply PUT method");
  })
  .delete((req, res, next) => {
    Questions.remove({}).then((question) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(question);
    });
  });

questionRouter
  .route("/:questionId")
  .get((req, res, next) => {
    Questions.findById(req.params.questionId)
      .then(
        (question) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(question);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST method not allowed");
  })
  .put((req, res, next) => {
    Questions.findByIdAndUpdate(req.params.questionId)
      .then(
        (question) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(question);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .delete((req, res, next) => {
    Questions.findByIdAndRemove(req.params.questionId)
      .then(
        (question) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(question);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  });

questionRouter
  .route("/:questionId/answers")
  .get((req, res, next) => {
    Answers.find({})
      .then(
        (answers) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(answers);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Answers.create(req.body)
      .then(
        (answer) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(answer);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.send("PUT method not allowed");
  })
  .delete((req, res, next) => {
    Answers.remove({})
      .then(
        (answer) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(answer);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  });

questionRouter
  .route("/:questionId/answers/:answerId")
  .get((req, res, next) => {
    Answers.find(req.params.answerId)
      .then(
        (answer) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(answer);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.send("Update answer " + req.params.answerId);
  })
  .put((req, res, next) => {
    Answers.findByIdAndUpdate(req.params.answerId)
      .then(
        (answer) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(answer);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .delete((Req, res, next) => {
    Answers.findByIdAndRemove(req.params.answerId)
      .then(
        (answer) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(answer);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  });

module.exports = questionRouter;

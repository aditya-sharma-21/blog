const express = require("express");
const bodyParser = require("body-parser");

const Answers = require("../model/answers");

const answerRouter = require('./questionsRouter');

answerRouter.use(bodyParser.json());

answerRouter
  .route("/")
  .get((req, res, next) => {
    Answers.find({})
      .then(
        (answers) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json();
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .post((req, res, next) => {
    Answers.create(req.body)
      .then(
        (answer) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json();
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
        (answers) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json();
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  });

answerRouter
  .route("/:answerId")
  .get((req, res, next) => {
    Answers.findById(req.params.answerId)
      .then(
        (answer) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json();
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.send(" Can not Update answer in " + req.params.answerId);
  })
  .put((req, res, next) => {
    Answers.findByIdAndUpdate(req.params.answerId)
      .then(
        (answer) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json();
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
          res.json();
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  });

module.exports = answerRouter;

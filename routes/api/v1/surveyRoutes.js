const express = require("express");
const router = express.Router();

const surveyController = require("../../../Controllers/v1/surveyController");

/*
    @route   GET api/v1/surveys
    @access  Private
*/
router.get("/", surveyController.getAnswers);

/*
    @route   GET api/v1/surveys/:id
    @access  Private
*/
router.get("/:id", surveyController.getAnswer);

/*
    @route   POST api/v1/surveys
    @access  Public
*/
router.post("/", surveyController.submitAnswers);

module.exports = router;

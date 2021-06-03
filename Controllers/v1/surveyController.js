const Survey = require("../../Models/v1/Survey");
const { successResponse, successCreate, serverError, notFoundError } = require("../../utils/response");

// @desc    Get all survey answers
exports.getAnswers = async (req, res) => {
  try {
    const surveyAnswers = await Survey.find().sort({ date: -1 });

    successResponse(res, surveyAnswers);
  } catch (err) {
    serverError(res, err.message);
  }
};

// @desc    Submit survey answer
exports.submitAnswers = async (req, res) => {
  const { uName, phoneNumber, hasACar, carColor, carType, paymentMethod, boughtPlace, usePublicTransport, date } =
    req.body;

  try {
    surveyAnswer = new Survey({
      uName,
      phoneNumber,
      hasACar,
      carColor,
      carType,
      paymentMethod,
      boughtPlace,
      usePublicTransport,
      date,
    });

    await surveyAnswer.save();

    successCreate(res);
  } catch (err) {
    serverError(res, err.message);
  }
};

// @desc     Get survey answer by id
exports.getAnswer = async (req, res) => {
  try {
    const surveyAnswer = await Survey.findById(req.params.id);

    // Check for ObjectId format and survey answer

    if (!surveyAnswer) return notFoundError(res);

    successResponse(res, surveyAnswer);
  } catch (err) {
    serverError(res, err.message);
  }
};

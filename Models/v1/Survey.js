const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
  hasACar: {
    type: Boolean,
    required: true,
  },
  carColor: {
    type: String,
  },
  carType: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  boughtPlace: {
    type: String,
  },
  usePublicTransport: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Survey = mongoose.model("survey_data", SurveySchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const status = require("../utility/challengStatus");
const doneChallengeSchema = mongoose.Schema({
  description: { type: String, required: true },
  creator: {
    required: true,
    type: String,
    ref: "users"
  },
  image: { type: String, required: true },

  given_to: {
    required: true,
    type: String,
    ref: "given_to"
  },
  challenge_id: {
    required: true,
    type: String,
    ref: "challenge"
  },
  date: {
    date: {
      type: Date,
      default: Date.now
    }
  }
});
doneChallengeSchema.plugin(uniqueValidator);
module.exports = mongoose.model("doneChallenges", doneChallengeSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  // otherNames: { type: String, required: false },
  bio: { type: String },
  constituency: { type: String, required: true },
  party: { type: String, required: true },
  province: { type: String, required: true },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;

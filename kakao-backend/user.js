var mongoose = require("mongoose");

const kakaoSchema = mongoose.Schema(
  {
    name: String,
    message: String,
    dataStamp: String,
  },
  { versionKye: false }
);

module.exports = mongoose.model("schema", kakaoSchema);

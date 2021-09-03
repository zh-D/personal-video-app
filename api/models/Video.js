const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    // trailer: { type: String },
    video: { type: String },
    // year: { type: String },
    // limit: { type: Number },
    genre: { type: String },
    // type: { type: Boolean, default: false },
    type: { type: String, default: "noType" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", VideoSchema);

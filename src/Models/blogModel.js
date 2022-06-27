const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    authorId: {
      type: ObjectId,
      ref: "Author",
      required: true,
    },
    tags: [String],
    category: {
      type: String,
      required: true,
    },
    subcategory: [String],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    Published: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: String,
      default: "",
    },
    deletedAt: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);

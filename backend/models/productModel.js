const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  price: { type: Number, required: [true, "Please Enter product Price"] },
  category: { type: String, required: [true, "Please Enter Product Category"] },
  stock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    default: 1,
  },
  user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);




import mongoose from "mongoose";

const { Schema } = mongoose;

const ModelSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  height: {
    type: Number,
    required: [true, "Height is required"],
    min: [0, "Height cannot be negative"],
  },
  weight: {
    type: Number,
    required: [true, "Weight is required"],
    min: [0, "Weight cannot be negative"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [0, "Age cannot be negative"],
  },
  priceOne: {
    type: Number,
    required: [true, "PriceOne is required"],
    min: [0, "PriceOne cannot be negative"],
  },
  priceThree: {
    type: Number,
    required: [true, "PriceThree is required"],
    min: [0, "PriceThree cannot be negative"],
  },
  priceNight: {
    type: Number,
    required: [true, "PriceNight is required"],
    min: [0, "PriceNight cannot be negative"],
  },
  tgAdmin: {
    type: String,
    // required: [true, "tgAdmin is required"],
    trim: true,
  },
  imageUrl: {
    type: [String], // Изменено на массив строк
    trim: true,
  },
}, {
  timestamps: true,
});

const Model = mongoose.model("Model", ModelSchema);

export default Model;

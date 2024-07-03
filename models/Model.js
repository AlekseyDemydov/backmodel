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
    required: [true, "age is required"],
    min: [0, "age cannot be negative"],
   
  },
  weight: {
    type: Number,
    required: [true, "age is required"],
    min: [0, "age cannot be negative"],

   
  },
  age: {
    type: Number,
    required: [true, "age is required"],
    min: [0, "age cannot be negative"],
  },
  priceOne: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  priceThree: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  priceNight: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  imageUrl: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

const Model = mongoose.model("Model", ModelSchema);

export default Model;
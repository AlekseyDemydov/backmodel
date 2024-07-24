


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



  anal: {
    type: Number,
    required: [true, "anal is required"],
    min: [0, "anal cannot be negative"],
  }, domination: {
    type: Number,
    required: [true, "domination is required"],
    min: [0, "domination cannot be negative"],
  }, bondage: {
    type: Number,
    required: [true, "bondage is required"],
    min: [0, "bondage cannot be negative"],
  }, massage: {
    type: Number,
    required: [true, "massage is required"],
    min: [0, "massage cannot be negative"],
  }, gmg: {
    type: Number,
    required: [true, "gmg is required"],
    min: [0, "gmg cannot be negative"],
  }, svyazivanie: {
    type: Number,
    required: [true, "svyazivanie is required"],
    min: [0, "svyazivanie cannot be negative"],
  }, mgm: {
    type: Number,
    required: [true, "mgm is required"],
    min: [0, "mgm cannot be negative"],
  }, rolePlaying: {
    type: Number,
    required: [true, "rolePlaying is required"],
    min: [0, "rolePlaying cannot be negative"],
  },
}, {
  timestamps: true,
});

const Model = mongoose.model("Model", ModelSchema);

export default Model;

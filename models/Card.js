import mongoose from "mongoose";

const { Schema } = mongoose;

const CardSchema = new Schema({
    numberCard: {
        type: String,
        required: true,
    },
    numberCardSBP: {
        type: String,
        required: true,
    },
    bank: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const Card = mongoose.model("Card", CardSchema);
export default Card
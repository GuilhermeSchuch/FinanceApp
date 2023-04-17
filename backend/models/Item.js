const mongoose = require("mongoose");

const { Schema } = mongoose;

const itemSchema = new Schema(
    {
        name: String,
        gainOrExpense: Number,
        value: Number,
        wallet: String,
        month: String
    },
    {timestamps: true}
);

const Item = mongoose.model("Item", itemSchema);

module.exports = { Item, itemSchema };
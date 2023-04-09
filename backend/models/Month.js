const mongoose = require("mongoose");

const { Schema } = mongoose;

const monthSchema = new Schema(
    {
        name: String,
        total: Number,
    },
    {timestamps: true}
);

const Month = mongoose.model("Month", monthSchema);

module.exports = { Month, monthSchema };
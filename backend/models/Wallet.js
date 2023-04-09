const mongoose = require("mongoose");

const { Schema } = mongoose;

const walletSchema = new Schema(
    {
        name: String,
        totalGains: Number,
        totalExpenses: Number
    },
    {timestamps: true}
);

const Wallet = mongoose.model("Wallet", walletSchema);

module.exports = { Wallet, walletSchema };
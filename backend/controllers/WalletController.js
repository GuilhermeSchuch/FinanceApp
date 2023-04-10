const { Wallet: WalletModel } = require("../models/Wallet");

const walletController = {
    create: async(req, res) => {
        try {
            const wallet = {
                name: req.body.name,
                totalGains: 0,
                totalExpenses: 0
            };

            const response = await WalletModel.create(wallet);
            return res.status(201).json({ response, msg: "Wallet posted" });

        } catch (error) {
            console.log(`CreateWalletControllerError: ${error}`);
        }
    },
    find: async(req, res) => {
        try {
            const response = await WalletModel.find();
            return res.status(201).json({ response });
        } catch (error) {
            console.log(`FindWalletControllerError: ${error}`);
        }
    }
}

module.exports = walletController;
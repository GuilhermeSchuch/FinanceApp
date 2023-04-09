const { Month: MonthModel } = require("../models/Month");

const monthController = {
    create: async(req, res) => {
        try {
            const month = {
                name: req.body.name,
                total: 0
            };

            const response = await MonthModel.create(month);
            return res.status(201).json({ response, msg: "Month posted" });

        } catch (error) {
            console.log(`MonthControllerError: ${error}`);
        }
    }
}

module.exports = walletController;
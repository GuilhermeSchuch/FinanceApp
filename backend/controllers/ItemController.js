const { Item: ItemModel } = require("../models/Item");

const itemController = {
    create: async(req, res) => {
        if(!req.headers['x-access-token']){
            return res.status(401).json({ msg: "You are not logged in!" });
        }
        try {
            const item = {
                name: req.body.name,
                gainOrExpense: req.body.gainOrExpense,
                value: req.body.value,
                wallet: req.body.wallet,
                month: req.body.month
            };

            const response = await ItemModel.create(item);
            return res.status(201).json({ response, msg: "Item posted" });

        } catch (error) {
            console.log(`CreateItemControllerError: ${error}`);
        }
    },
    find: async(req, res) => {
        try {
            const response = await ItemModel.find();
            return res.status(201).json({ response });
        } catch (error) {
            console.log(`FindItemControllerError: ${error}`);
        }
    }
}

module.exports = itemController;
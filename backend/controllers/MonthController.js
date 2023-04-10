const { Month: MonthModel } = require("../models/Month");

const monthController = {
    create: async(req, res) => {
        if(!req.headers['x-access-token']){
            return res.status(401).json({ msg: "You are not logged in!" });
        }
        if(1 == 1){
            
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
        else{
            res.status(401).json({ msg: "You are not logged in!" })
        }
    }
}

module.exports = monthController;
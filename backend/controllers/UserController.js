const { User: UserModel } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
    create: async(req, res) => {
        try {
            
            // Create password
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(req.body.password, salt);

            const user = {
                email: req.body.email,
                password: passwordHash
            };

            // Check if user exists
            const userExists = await UserModel.findOne({ email: req.body.email });


            if(userExists){
                return res.status(422).json({ msg: "E-mail already registered" });
            }
            else{
                const response = await UserModel.create(user);
                return res.status(201).json({ response, msg: "User posted" });
            }

            // Generate token
            // try {
            //     const secret = process.env.SECRET;

            //     const token = jwt.sign({ id: user._id }, secret);

            //     res.status(200).json({msg: "Token generated successfully", token});
            // } catch (error) {
            //     console.log(`ControllerError: ${error}`);
            // }

        } catch (error) {
            console.log(`ControllerError: ${error}`);
        }
    },

    login: async(req, res) => {
        try {
            // Compare password
            const user = await UserModel.findOne({ email: req.body.email });
            const checkPassword = await bcrypt.compare(req.body.password, user.password);
            
            const secret = process.env.SECRET;
            const token = jwt.sign({ id: user._id }, secret);

            res.status(200).json({ msg: "You are logged in", token })

        } catch (error) {
            console.log(`LoginError: ${error}`);
        }
    }
}

module.exports = userController;
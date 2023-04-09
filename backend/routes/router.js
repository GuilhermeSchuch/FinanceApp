const router = require("express").Router();
const userController = require("../controllers/UserController");
const walletController = require("../controllers/WalletController");


//INDEX
router.route("/").get((req, res) => {
    // userController.create(req, res);
    console.log("Home");
});


// USER
router.route("/users").post((req, res) => {
    userController.create(req, res);
    // console.log("Post User");
    // console.log(req.body);
});

router.route("/users/login").post((req, res) => {
    userController.login(req, res);
    // console.log("Post User");
    // console.log(req.body);
});



// WALLET
router.route("/wallets").post((req, res) => {
    walletController.create(req, res);
});



// MONTH
router.route("/months").post((req, res) => {
    monthController.create(req, res);
});

module.exports = router;
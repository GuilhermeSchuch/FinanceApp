const router = require("express").Router();
const userController = require("../controllers/UserController");
const walletController = require("../controllers/WalletController");
const monthController = require("../controllers/MonthController");
const itemController = require("../controllers/ItemController");


//INDEX



// USER
router.route("/users").post((req, res) => {
    userController.create(req, res);
});

router.route("/users/:userId").put((req, res) => {
    userController.update(req, res);
});

router.route("/users/login").post((req, res) => {
    userController.login(req, res);
});



// WALLET
router.route("/wallets").post((req, res) => {
    walletController.create(req, res);
});

router.route("/wallets").get((req, res) => {
    walletController.find(req, res);
});


// MONTH
router.route("/months").post((req, res) => {
    monthController.create(req, res);
});


// ITEM
router.route("/items").post((req, res) => {
    itemController.create(req, res);
});

module.exports = router;
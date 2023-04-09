const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const mongoose = require("mongoose");

const main = async () => {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.l1pcdqd.mongodb.net/?retryWrites=true&w=majority`);
        console.log("Database connected");
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main;
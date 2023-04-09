require("dotenv").config();
const express = require("express");

// DB CONNECTION
const conn = require("./db/conn");
conn();

// ROUTES
const routes = require("./routes/router");

const app = express();
app.use(express.json());
app.use("/api", routes);
app.listen(3000, () => console.log("Server ON"));
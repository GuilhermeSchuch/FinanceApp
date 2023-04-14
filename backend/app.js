require("dotenv").config();
const express = require("express");
const cors = require("cors");

// DB CONNECTION
const conn = require("./db/conn");
conn();

// ROUTES
const routes = require("./routes/router");


const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routes);

// CORS



app.listen(3000, () => console.log("Server ON"));
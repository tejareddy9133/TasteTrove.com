const express = require("express");
require("dotenv").config();
const { connection } = require("./Config/db");
const app = express();
const cors = require("cors");

app.use(cors())

app.use(express.json());

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        // console.log(process.env);
        console.log(`Server is running at port ${process.env.PORT} `);
        console.log("Connected to DB");

    } catch (error) {
        console.log(error.message);
        console.log("Something Went Wrong....!");
    }
});

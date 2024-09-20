const mongoose = require('mongoose')

// dotenv - process
require("dotenv").config()

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL)
    .then( () => {
        console.log("Database is connected")
        })
    .catch((error) => {
        console.log("Issue while connecting Database")
        console.error(error.message)
        process.exit(1)
    })
}

module.exports = dbConnect
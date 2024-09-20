const express = require('express')
const app = express()

require('dotenv').config()

// middleware to use req.body
app.use(express.json())

const port = process.env.PORT || 4000

// routers
const route = require("./routes/route")
app.use('/api/v1', route)

app.listen(port, () => {
    console.log("Port is working")
})

const dbConnect = require("./utility/database")
dbConnect();

app.get('/', (req,res) => {
    res.send('Yes')
})




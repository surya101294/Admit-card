const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { connection } = require('./Config/db')
const { AdmitcardRouter } = require('./Routes/admitcardRoute')

const app = express()
app.use(express.json())
app.use(cors())
app.use("/admitcard", AdmitcardRouter)


app.get("/", (req, res) => {
    res.send("welcome")
})


app.listen(process.env.port, async () => {
    try {

        await connection
        console.log("connected");

    } catch (error) {
        console.log(error);

    }
})
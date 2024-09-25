const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')
const routes = require("./routes/routes")
app.use(express.json())

app.use('/api', routes);

connectDB(process.env.MONGO_URL)
.then(()=>{
    console.log("Database connected")
    app.listen(3000,()=>{
        console.log("server is running")
    })
}).catch((error)=>{
    console.log(error);
})

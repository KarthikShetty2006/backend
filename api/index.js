const express=require("express")
const app=express()
const cors=require('cors')
const {router}=require('../routes/route.js')
const connectDB=require('../connect/connect.js')
const port=process.env.PORT
app.use(cors())
app.use('/task',router)
require('dotenv').config()



const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log("running")
        })
    } catch (error) {
        console.log(error)
    }
}

start()
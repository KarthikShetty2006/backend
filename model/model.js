//schema
const mongoose=require("mongoose")
const TaskSchema=new mongoose.Schema({
    taskname:{type:String,
        required:true
    }
}
)
module.exports=mongoose.model("tasks",TaskSchema)
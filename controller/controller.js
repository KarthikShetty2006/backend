const tasks=require('../model/model.js')
//findall
const alltasks=async (req,res)=>{
    try {
        const task= await tasks.find({})
        if(!task){
            res.status(404).json({message:"no task found"})
        }
            res.status(200).json(task)
    } catch (error) {
            res.status(500).json(error)
            console.log(error)
    }
    
}
//findone
const singletask=async (req,res)=>{
    try {
        const {id}=req.params
        const task= await tasks.findOne({_id:id}).select('-__v')
        if(!task){
            res.status(404).json({message:"no task found"})
        }
            res.status(200).json(task)
    } catch (error) {
            res.status(500).json(error)
            console.log(error)
    }
    
}

//post
const createtask= async (req,res)=>{
       try {
        const {taskname}=req.body
       
        const task= await tasks.create({taskname})
            res.status(200).json(task)
    } catch (error) {
         console.log(error)
            res.status(500).json(error)
           
    }
}
//updatepatch
    const updatetaskpatch=async (req,res)=>{
    try {
        const {id}=req.params
        const {taskname}=req.body

        const task= await tasks.findByIdAndUpdate(id,{taskname})
        if(!task){
            res.status(404).json({message:"no task found"})
        }
          
            res.status(200).json({message:"edited task task",task:task})
    } catch (error) {
            res.status(500).json(error)
            console.log(error)
    }
    
}

//delete
const deletetask=async (req,res)=>{
    try {
        const {id}=req.params
        const task= await tasks.findOneAndDelete({_id:id})
        if(!task){
            res.status(404).json({message:"no user found"})
        }
            res.status(200).json({message:`deleted user with id${id}`})
    } catch (error) {
            res.status(500).json(error)
            console.log(error)
    }
}

module.exports={singletask,alltasks,deletetask,updatetaskpatch,createtask}
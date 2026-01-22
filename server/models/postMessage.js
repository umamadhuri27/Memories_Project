import mongoose from "mongoose";
const postSchema=mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFields:String,
    likes:{
        type:[String],
        default:[],
    },
    createdAt:{
        type:Date,
        default:Date()
    }

})

const postMessage=mongoose.model('postMessage',postSchema)
export default postMessage;
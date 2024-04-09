import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        require:true,
    },
    size:{
        type:Number,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

export const userModel = mongoose.model("products",userSchema)
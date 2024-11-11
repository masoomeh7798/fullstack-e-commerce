import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required:true
  },
  image:{
    type:String,
  },
  subCategory:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Category'
  },
  isActive:{
    type:Boolean,
    default:true
  }
},{timestamps:true});

const Category=mongoose.model('Category',categorySchema)
export default Category
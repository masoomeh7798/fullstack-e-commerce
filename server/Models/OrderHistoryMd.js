// import mongoose from "mongoose";
// const orderHistorySchema=new mongoose.Schema({
//     userId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'User'
//     },
//     totalPrice:{
//         type:Number,
//     },
//     addressId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'Address'
//     },
//     trackingCode:{
//         type:String
//     },
//     items:{
//         type:Array
//     },
//     freeShipping:{
//         type:Boolean,
//         default:false
//     }
// },{timestamps:true})

// const OrderHistory=mongoose.model('OrderHistory',orderHistorySchema)
// export default OrderHistory
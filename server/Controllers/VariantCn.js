import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import jwt from 'jsonwebtoken'
import ApiFeatures from "../Utils/apiFeatures.js";
import Variant from "../Models/VariantMd.js";
export const create=catchAsync(async(req,res,next)=>{
    const variant=await Variant.create(req.body)
    return res.status(201).json({
        success:true,
        data:{variant},
        message:'variant code created'
    })
})
export const get=catchAsync(async(req,res,next)=>{
    const {id}=req.params
    const variant=await Variant.findById(id)
    return res.status(200).json({
        success:true,
        data:{variant},
    })
})
export const getAll=catchAsync(async(req,res,next)=>{
    const features=new ApiFeatures(Variant,req.query).filters().sort().paginate().limitFields().populate()
    const variant=await features.model
    const count=await Variant.countDocuments(req?.query?.filters)
    return res.status(200).json({
        success:true,
        data:{variant},
        count
    })
})
export const update=catchAsync(async(req,res,next)=>{
    const {id}=req.params
    const variant=await Variant.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})
    return res.status(200).json({
        success:true,
        data:{variant},
        message:'variant code updated'

    })
})
export const remove=catchAsync(async(req,res,next)=>{
    const {id}=req.params
    const variant=await Variant.findByIdAndDelete(id)
    return res.status(200).json({
        success:true,
        message:'variant code deleted'

    })
})

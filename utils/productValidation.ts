import Joi from "joi";
import { Request,Response,NextFunction } from "express";
const ProductValidation = (req:Request,res:Response,next:NextFunction)=>{
    const schema = Joi.object({
        name:Joi.string().required(),
        price:Joi.number().required(),
        size:Joi.number().required()
    })
    const {error,value} = schema.validate(req.body)
    if(error){
        return res.status(400).json({message:"bad reques", error})
    }
    next();
}
export default ProductValidation
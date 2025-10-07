import User from "../models/user.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateTokenandsetcookie.js"

export const signUp= async(req,res)=>{
    try {
        const {username,fullname,password}= req.body

        if(!username|| !fullname ||!password){
            return res.status(400).json({
                success:false,
                message:"all the fields are required"
            })
             
        }
        if(password.length<6){
            return res.status(400).json({
                success:false,
                message:"password must have more than 6 characters"
            })
        }
        const user= await User.findOne({username})

        if(user){
            return res.status(400).json({
                success:false,
                message:"this username is taken"
            })
        }
        const harshedPassword= await bcrypt.hash(password,10)

        const newUser= await User.create({
            username,
            fullname,
            password:harshedPassword
        })

        generateTokenAndSetCookie(res,newUser._id)
        

        res.status(201).json({
            success:true,
            message:"signup successfully",
            data:newUser

        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}
export const login= async(req,res)=>{
    try {
        const {username,password}=req.body

        if(!username  || !password){
            return res.status(400).json({
                success:false,
                message:"message all fields are required"
            })
        }
        const user= await User.findOne({username})
        const correctPassword=await bcrypt.compare(password,user.password)
        

        if(!user || !correctPassword){
            return res.status(400).json({
                success:false,
                message:"invalid credentials"
            })
        }

        generateTokenAndSetCookie(res,user._id)
        
        res.status(200).json({
            success:true,
            message:"login successfully",
            data:user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}
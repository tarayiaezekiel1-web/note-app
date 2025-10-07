import jwt from "jsonwebtoken"

const generateTokenAndSetCookie= async(res,userId)=>{
    
        const token=  jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"15d"})

        res.cookie("jwt",token,{
            httpOnly:true,
            sameSite:"strict",
            maxAge:15*24*60*60*1000
        })
    
}
export default generateTokenAndSetCookie
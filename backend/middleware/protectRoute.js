/*import User from "../user.js"

import jwt from "jsonwebtoken"



const protectRoute= async(req,res,next)=>{
    try {
        const token= req.cookies.jwt

        if(!token){
            return res.status(404).json({
                success:false,
                message:"not authorized"
            })
        }
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        
        const user= await User.findById(decoded.userId).select("-password")

        req.user=user

		

		if (!req.user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

        next()
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}
export default protectRoute
*/
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    req.user = user; // attach user to request
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export default protectRoute;

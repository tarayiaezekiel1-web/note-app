import mongoose from "mongoose"

const connectdb= async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)

        console.log("connected to database")
    } catch (error) {
        console.error("failed",error)
    }
}
export default connectdb
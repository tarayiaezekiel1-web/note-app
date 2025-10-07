import Note from "../models/notes.js"

export const getNotes= async(req,res)=>{
    try {
        const notes= await Note.find()

        if(notes.length===0){
            return res.status(404).json({
                success:false,
                message:"no notes found"
            })
        }
        res.status(200).json({
            success:true,
            message:"notes found successfully",
            data:notes
        })
    } catch (error) {
           res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
export const deleteNote= async(req,res)=>{
    try {
        const {id}= req.params

        const note= await Note.findByIdAndDelete(id)

        if(!note){
            return res.status(404).json({
                success:false,
                message:"no note found"
            })
        }
        res.status(200).json({
            success:true,
            message:"note deleted successfully",
            
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
export const postNotes= async(req,res)=>{
    try {
        const {title,description}= req.body

        if(!title||!description){
            return res.status(400).json({
                success:false,
                message:"all the fields are required"
            })
        }
        const newNote= await Note.create({
            title,
            description
        })

        res.status(201).json({
            success:true,
            message:"note added successfully",
            data:newNote

        })

    } catch (error) {
           res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

export const updateNote= async(req,res)=>{
    try {
        const {title,description}=req.body
        const {id}= req.params

        const note= await Note.findByIdAndUpdate(id,{title,description},{
            new:true, runValidators:true
        })

        res.status(200).json({
            success:true,
            message:"note updated successfully",
            data:note
        })
    } catch (error) {
           res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

export const getNoteById= async(req,res)=>{
    try {
        const {id}= req.params
        const note= await Note.findById(id)

        if(!note){
            return res.status(404).json({
                success:false,
                message:"no note found"
            })
        }
        res.status(200).json({
            success:true,
            message:"note fetched successfully",
            data:note
        })
    } catch (error) {
           res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
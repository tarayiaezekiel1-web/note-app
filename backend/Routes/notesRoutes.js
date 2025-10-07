import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getNotes,postNotes,getNoteById,deleteNote,updateNote } from "../controllers/noteControllers.js";

const router= express.Router()

router.get("/",protectRoute,getNotes)
router.post("/post",protectRoute,postNotes)
router.get("/:id",protectRoute,getNoteById)
router.delete("/:id",protectRoute,deleteNote)
router.put("/:id",protectRoute,updateNote)


export default router


//mongodb+srv://tarayiaezekiel1_db_user:3hAeIea8ZL4H56bV@cluster0.xqwzzrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
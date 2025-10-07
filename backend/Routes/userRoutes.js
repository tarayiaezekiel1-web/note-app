import express from "express";
import { login,signUp } from "../controllers/userControllers.js";

const  router= express.Router()

router.post("/signup",signUp)
router.post("/login",login)
//router.post("/logout",Logout)

export default router
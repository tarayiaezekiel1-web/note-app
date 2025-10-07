import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import notesRoutes from "./Routes/notesRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import connectdb from "./config/db.js";
import cors from "cors"

dotenv.config();

const app = express();

// Middleware

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser());

app.use(express.json());

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/notes", notesRoutes);

// Start server after DB connection
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectdb();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  }
};

startServer();



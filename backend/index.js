import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import notesRoutes from "./Routes/notesRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import connectdb from "./config/db.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
  }));
}

app.use(cookieParser());
app.use(express.json());

// API routes
app.use("/api/auth", userRoutes);
app.use("/api/notes", notesRoutes);

// React frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/^\/.*$/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

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

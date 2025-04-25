import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import connectDB from "./utils/db.js";

import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();
 await connectDB();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json()); // Body parser
app.use(cookieParser()); 

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use('/api/contact', contactRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `🚀 Server is up and running!\n` +
      `🌐 Listening on http://localhost:${PORT}\n` +
      `📅 Started at: ${new Date().toLocaleString()}\n`
  );
});

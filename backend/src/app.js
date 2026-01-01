import express from "express";
import healthRoutes from "./routes/healthRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import logger from "./middleware/logger.js";

const app = express();

app.use(express.json());
app.use(logger);
// base route
app.get("/", (req, res) => {
  res.send("CampusOps Backend is running 🚀");
});

// API routes
app.use("/api", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api/admin", adminRoutes);

app.use(errorHandler);

export default app;

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
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", healthRoutes);


app.use(errorHandler);

export default app;

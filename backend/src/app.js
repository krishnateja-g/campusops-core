import express from "express";
import healthRoutes from "./routes/healthRoutes.js";

const app = express();

app.use(express.json());

// base route
app.get("/", (req, res) => {
  res.send("CampusOps Backend is running 🚀");
});

// API routes
app.use("/api", healthRoutes);

export default app;

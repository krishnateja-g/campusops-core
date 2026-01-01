import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/authorizeMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

// GET all users — ADMIN ONLY
router.get("/users", protect, authorize("admin"), async (req, res) => {
  const users = await User.find().select("-password");
  res.status(200).json(users);
});

export default router;

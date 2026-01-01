import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/authorizeMiddleware.js";
import { getAllUsers } from "../controllers/adminController.js";

const router = express.Router();

// GET all users — ADMIN ONLY
router.get("/users", protect, authorize("admin"), getAllUsers);

export default router;

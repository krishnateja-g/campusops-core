import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getAllUsers = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  const users = await User.find()
    .select("-password")
    .skip(skip)
    .limit(limit);

  res.status(200).json({
    page,
    limit,
    count: users.length,
    users
  });
});

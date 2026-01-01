import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getCache, setCache } from "../utils/cache.js";


export const getAllUsers = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const cacheKey = `users:${page}:${limit}`;
  
    const cachedUsers = getCache(cacheKey);
    if (cachedUsers) {
      return res.status(200).json({
        fromCache: true,
        ...cachedUsers
      });
    }
  
    const skip = (page - 1) * limit;
  
    const users = await User.find()
      .select("-password")
      .skip(skip)
      .limit(limit);
  
    const response = {
      page,
      limit,
      count: users.length,
      users
    };
  
    setCache(cacheKey, response, 60); // cache for 60 seconds
  
    res.status(200).json({
      fromCache: false,
      ...response
    });
  });
  
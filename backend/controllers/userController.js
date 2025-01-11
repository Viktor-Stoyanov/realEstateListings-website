import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @accesss Public
const getUser = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});
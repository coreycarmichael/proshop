import express from "express";
const router = express.Router();
import { getProducts, getProductsById } from "../controllers/productControllers.js";

router.route('/').get(getProducts);
router.route('/').get(getProductsById);

export default router;
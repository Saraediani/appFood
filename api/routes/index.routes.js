import express from "express";
const router = express.Router();

import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import restaurantRoutes from "./restaurant.routes.js";
import mealRoutes from "./meal.routes.js";
import orderRoutes from "./order.routes.js";
import homeRoutes from "./home.routes.js";

import {verifyAuth, verifyPermission} from "../middleware/auth.js";

router.use("/", authRoutes);
router.use(verifyAuth)
router.use("/user", userRoutes);
router.use("/restaurant", verifyPermission("manger"), restaurantRoutes);
router.use("/meal", verifyPermission('manger'), mealRoutes);
router.use("/order",  orderRoutes);
router.use("/home",  homeRoutes);

export default router;

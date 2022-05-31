import express from "express";
const router = express.Router();

import authController from "../controllers/authController.js";

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/activate-account/:token", authController.activateAccount);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password/:token", authController.resetPassword);
router.route("/refresh-token").get(authController.refreshToken);
router.route("/logout").get(authController.logout);

export default router;

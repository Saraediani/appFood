import express from "express";
const router = express.Router();

import userController from "../controllers/userController.js";

router.route("/cart").put(userController.updateUserCart).get(userController.getUserCart)
router.route("/").post(userController.addUser).get(userController.getAllUsers);
router
  .route("/:id")
  .patch(userController.updateUser)
  .get(userController.getSingleUser)
  .delete(userController.deleteUser);


export default router;

import express from "express";
const router = express.Router();

import mealController from "../controllers/MealController.js";

import upload from '../helpers/multer.js'

router.route("/").post(upload.array('images', 4), mealController.addMeal).get(mealController.getAllMeals);
router
  .route("/:id")
  .patch(upload.array("images", 4), mealController.updateMeal)
  .get(mealController.getMeal)
  .delete(mealController.deleteMeal);

export default router;

import express from "express";
const router = express.Router();

import orderController from "../controllers/OrderController.js";

router
  .route("/")
  .post(orderController.addOrder)
  .get(orderController.getAllOrders);
router
  .route("/:id")
  .patch(orderController.updateOrder)
  .get(orderController.getOrder)
  .delete(orderController.deleteOrder)
  .put(orderController.cancelOrder);

export default router;

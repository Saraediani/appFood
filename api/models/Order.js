import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
});

const orderSchema = mongoose.Schema(
  {
    meals: [
      {
        mealId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Meal",
          required: true,
        },
        amount: { type: Number, required: true },
      },
    ],
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "ready", "on the way", "delivered", "canceled"],
      default: "pending",
    },
    payment: {
      // method: {
      //   type: String,
      //   required: true,
      //   enum: ["on delivering", "on app"],
      // },
      type: { type: String, required: true, enum: ["cash", "credit card"] },
      isPayed: { type: Boolean, required: true, default: false },
    },
    shippingAddress: { type: addressSchema, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);

export default Order;

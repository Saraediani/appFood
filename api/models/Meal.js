import mongoose from "mongoose";

const mealSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: Array, required: true, min: 2, max: 4 },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
  },
  { timestamps: true }
);

const Meal = mongoose.model("meal", mealSchema);

export default Meal;

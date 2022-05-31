import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
});

const restaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    // description: { type: String, required: [true, "Description is required"] },
    address: {
      type: addressSchema,
      required: true,
    },
    phone: {
      type: Number,
      required: [true, "Phone is required"],
      unique: [true, "Phone number already exists"],
    },
    rating: { type: Number, required: [true, "Rating is required"] },
    // cuisine: { type: String, required: [true, "Cuisine is required"] },
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("restaurant", restaurantSchema);

export default Restaurant;

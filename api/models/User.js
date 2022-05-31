import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  street: {type: String},
  city: {type: String}
})

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true, min: 3 },
    lastName: { type: String, required: true, min: 3 },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    address: [{ type: addressSchema, default: [] }],
    cart: [{ type: Array, default: [] }],
    favorite: [{type: Array, default: []}],
    role: {
      type: String,
      enum: ["admin", "manager", "client", "agent"],
      default: "client",
    },
    active: { type: Boolean, default: false },
    password: { type: String, required: true, min: 8 },
    refreshToken: { type: String, default: null },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);
const User = mongoose.model("user", userSchema);

export default User;

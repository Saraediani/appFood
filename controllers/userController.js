import bcrypt from "bcryptjs";

import User from "../models/User.js";

import {
  addUserValidation,
  updateUserValidation,
} from "../validation/userValidation.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const addUser = async (req, res) => {
  try {
    const result = addUserValidation(req.body);
    if (result.error)
      return res
        .status(400)
        .json({ error: true, message: result.error.message });
    const checkEmail = await User.exists({ email: result.value.email });
    if (checkEmail)
      return res
        .status(400)
        .json({ error: true, message: "Email already exist" });
    // ! check duplicate phone number
    const checkPhone = await User.exists({ email: result.value.email });
    if (checkPhone)
      return res
        .status(400)
        .json({ error: true, message: "Phone number already exist" });

    const password = "12345678";
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    result.value.password = hashedPassword;
    result.value.active = true;

    const user = new User(result.value);
    await user.save();
    return res.status(200).json({
      error: false,
      message: "user added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = updateUserValidation(req.body);
    if (result.error)
      return res
        .status(400)
        .json({ error: true, message: result.error.message });

    const user = await User.findOneAndUpdate({ _id: id }, result.value, {
      new: true,
      runValidators: true,
    });
    if (!user)
      return res.status(404).json({ error: true, message: "user not found" });

    return res
      .status(200)
      .json({ error: false, message: "user updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOneAndDelete({ _id: id });
    if (!user)
      return res.status(404).json({
        error: true,
        message: "User doesn't exist or already deleted",
      });
    return res.status(200).json({
      error: false,
      message: "User has been deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    let query = null;
    let { role, active } = req.query;
    if (role && active) {
      query = { role: role, active: active };
    } else if (role) {
      query = { role: role };
    } else if (active) {
      query = { active: active };
    } else {
      query = {};
    }
    const users = await User.find(query);
    if (!users)
      return res.status(404).json({ error: true, message: error.message });
    return res.status(200).json({ error: false, data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id, {
      firstName: 1,
      lastName: 1,
      email: 1,
      role: 1,
      phone: 1,
      _id: 0,
    });
    if (!user)
      return res.status(400).json({ error: true, message: "User not found" });
    return res.status(200).json({ error: false, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const getUserCart = async (req, res) => {
  const id = req.user._id;
  console.log(id);
  try {
    const cart = await User.findById(id, { _id: 0, cart: 1 });
    return res.json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const updateUserCart = async (req, res) => {
  const id = req.user._id;
  try {
    const duplicateItem = await User.exists({ _id: id }); 
    console.log(duplicateItem)
    // const user = await User.updateOne({ _id: id }, { $push: { cart: req.body } });
    // return res
    //   .status(200)
    //   .json({ error: false, message: "meal added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

export default {
  addUser,
  getSingleUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserCart,
  updateUserCart,
};

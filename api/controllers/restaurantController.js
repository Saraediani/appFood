import Restaurant from "../models/Restaurant.js";
import { restaurantValidation } from "../validation/restaurantValidation.js";

const addRestaurant = async (req, res) => {
  try {
    const result = restaurantValidation(req.body);
    if (result.error)
      return res
        .status(400)
        .json({ error: true, message: result.error.message });
    const checkRestaurantExist = await Restaurant.exists({
      name: result.value.name,
    });
    if (checkRestaurantExist)
      return res
        .status(400)
        .json({ error: true, message: "Restaurant already exist" });
    const checkRestaurantPhone = await Restaurant.exists({
      phone: result.value.phone,
    });
    if (checkRestaurantPhone)
      return res.status(400).json({
        error: true,
        message: "This phone number is used by other restaurant",
      });
    result.value.managerId = req.user._id;
    const restaurant = new Restaurant(result.value);
    await restaurant.save((err, data) => {
      if (err)
        return res.status(400).json({ error: true, message: err.message });
      return res.status(200).json({
        error: false,
        message: "Restaurant added successfully",
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const addMealsToRestaurant = async (req, res) => {
  const { id } = req.params;
  const { meals } = req.body;
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      { _id: id },
      { $push: { menuItems: meals } },
      { new: true, useFindAndModify: false }
    );
    return res.send(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const result = restaurantValidation(req.body);
    if (result.error)
      return res
        .status(400)
        .json({ error: true, message: result.error.message });
    const restaurant = await Restaurant.findOneAndUpdate(
      { _id: id },
      result.value,
      { new: true, runValidators: true }
    );
    if (!restaurant)
      return res
        .status(404)
        .json({ error: true, message: "restaurant not found" });
    return res
      .status(200)
      .json({ error: false, message: "restaurant updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findOneAndDelete({ _id: id });
    if (!restaurant)
      return res.status(404).json({
        error: true,
        message: "Restaurant doesn't exist or already deleted",
      });
    return res.status(200).json({
      error: false,
      message: "Restaurant has been deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const getAllRestaurants = async (req, res) => {
  const page = req.query.page ? parseInt(req.query.page, 10) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
  const { city, rating, cuisine } = req.query;

  const pipeline = [
    {
      $project: {
        _id: 1,
        name: 1,
        city: "$address.city",
        phone: 1,
        rating: 1,
        cuisine: 1,
      },
    },
    {
      $skip: page * limit,
    },
    {
      $limit: limit,
    },
  ];

  const match = {};

  if (city) match["address.city"] = city;
  if (rating) match.rating = parseInt(rating, 10);
  if (cuisine) match.cuisine = cuisine;
  if (req.user.role == "manager") match.managerId = req.user._id;
  if (Object.keys(match).length > 0) pipeline.unshift({ $match: match });

  try {
    const restaurants = await Restaurant.aggregate(pipeline);
    const totalRestaurant = await Restaurant.countDocuments();
    const numberOfPages = Math.ceil(totalRestaurant / limit);

    res.status(200).json({
      error: false,
      found: totalRestaurant,
      numberOfPages,
      data: restaurants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const getRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findById(id);
    if (!restaurant)
      return res
        .status(404)
        .json({ error: true, message: "Restaurant not found" });
    res.status(200).json({ error: false, data: restaurant });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

export default {
  addRestaurant,
  updateRestaurant,
  getRestaurant,
  getAllRestaurants,
  deleteRestaurant,
  addMealsToRestaurant,
};

import Meal from "../models/Meal.js";
import { mealValidation } from "../validation/mealValidation.js";

const addMeal = async (req, res) => {
  const images = req.files.map((file) => {
    return file.filename;
  });
  req.body.images = images;

  try {
    const result = mealValidation(req.body);
    if (result.error)
      return res
        .status(400)
        .json({ error: true, message: result.error.message });
    const checkMealExist = await Meal.exists({
      name: result.value.name,
    });
    if (checkMealExist)
      return res
        .status(400)
        .json({ error: true, message: "Meal already exist" });

    const meal = new Meal(result.value);
    await meal.save((err, data) => {
      if (err)
        return res.status(400).json({ error: true, message: err.message });
      return res.status(200).json({
        error: false,
        message: "Meal added successfully",
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const addMealToMeal = async (req, res) => {
  const { mealsId, mealId } = req.body;
  await Meal.findByIdAndUpdate(
    { _id: mealId },
    { $push: { mealsId: mealsId } },
    { new: true, useFindAndModify: false }
  );
};

const updateMeal = async (req, res) => {
  const { id } = req.params;
  const images = req.files.map((file) => {
    return file.filename;
  });
  req.body.images = images;
  try {
    const result = mealValidation(req.body);
    if (result.error)
      return res
        .status(400)
        .json({ error: true, message: result.error.message });
    const meal = await Meal.findOneAndUpdate({ _id: id }, result.value, {
      new: true,
      runValidators: true,
    });
    if (!meal)
      return res.status(404).json({ error: true, message: "meal not found" });
    return res
      .status(200)
      .json({ error: false, message: "meal updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const deleteMeal = async (req, res) => {
  const { id } = req.params;
  try {
    const meal = await Meal.findOneAndDelete({ _id: id });
    if (!meal)
      return res.status(404).json({
        error: true,
        message: "Meal doesn't exist or already deleted",
      });
    return res.status(200).json({
      error: false,
      message: "Meal has been deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const getAllMeals = async (req, res) => {
  const page = req.query.page ? parseInt(req.query.page, 10) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
  const { category, price } = req.query;

  const pipeline = [
    {
      $project: {
        name: 1,
        category: 1,
        price: 1,
        description: 1,
        images: 1
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

  // const filter = { $match: {}, $skip: {} };

  // if (req.query.page) {
  //   filter["$skip"] = page * limit;
  // }
  if (category) match.category = category;
  if (price) match.price = price;
  if (Object.keys(match).length > 0) pipeline.unshift({ $match: match });
  // if (req.query.cuisine) filter["$match"].cuisine = req.query.cuisine;
  // if (req.user.role == "manager") filter["$match"].managerId = req.user._id;

  // if (filter.hasOwnProperty("$match") == null)
  //   pipeline.unshift(filter["$match"]);

  // if (filter.hasOwnProperty("$skip") == null) pipeline.push(filter["$skip"]);
  // console.log(filter.hasOwnProperty("$match") == null);

  try {
    const meals = await Meal.aggregate(pipeline);
    const totalMeal = await Meal.countDocuments();
    const numberOfPages = Math.ceil(totalMeal / limit);

    res.status(200).json({
      error: false,
      found: meals.length,
      numberOfPages,
      data: meals,
      pipeline,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const getMeal = async (req, res) => {
  const { id } = req.params;
  try {
    const meal = await Meal.findById(id);
    if (!meal)
      return res.status(404).json({ error: true, message: "Meal not found" });
    res.status(200).json({ error: false, data: meal });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

export default {
  addMeal,
  updateMeal,
  getMeal,
  getAllMeals,
  deleteMeal,
  addMealToMeal,
};

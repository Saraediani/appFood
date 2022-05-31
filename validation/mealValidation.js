import Joi from "joi";

const mealValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    category: Joi.string(),
    price: Joi.number().required(),
    restaurantId: Joi.string().required(),
    images: Joi.array(),
    // images: Joi.array().min(1).max(4).required(),
  });
  return schema.validate(data);
};

export { mealValidation };

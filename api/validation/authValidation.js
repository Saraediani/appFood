import Joi from "Joi";

const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(3),
    lastName: Joi.string().required().min(3),
    phone: Joi.string().required().min(10).max(10),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  });
  return schema.validate(data);
};

const resetPasswordValidation = (data) => {
  const schema = Joi.object({
    password: Joi.string().required().min(8),
    confirmPassword: Joi.ref("password"),
  });
  return schema.validate(data);
};

export {registerValidation,loginValidation, resetPasswordValidation}
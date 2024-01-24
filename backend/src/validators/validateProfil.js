const Joi = require("joi");

const genderValues = ["Male", "Female", "Non-Binary", "Other"];

const schema = Joi.object({
  lastname: Joi.string().min(1).max(50).required(),
  firstname: Joi.string().min(1).max(50).required(),
  birthdate: Joi.date().required(),
  gender: Joi.string()
    .valid(...genderValues)
    .required(),
  city: Joi.string().min(1).max(100).required(),
  postalCode: Joi.string().min(1).max(10).required(),
});

const validateProfil = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = validateProfil;

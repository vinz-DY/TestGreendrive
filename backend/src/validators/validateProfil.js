const Joi = require("joi");

const genderValues = ["male", "female"];

const schema = Joi.object({
  lastname: Joi.string().min(1).max(50).required(),
  name: Joi.string().min(1).max(50).required(),
  birthdate: Joi.date().required(),
  gender: Joi.string()
    .valid(...genderValues)
    .required(),
  postCode: Joi.string().min(1).max(10).required(),
  cityProfil: Joi.string().min(1).max(100).required(),
  image: Joi.string(),
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

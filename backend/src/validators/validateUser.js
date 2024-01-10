const Joi = require("joi");

const schema = Joi.object({
  mail: Joi.string().min(5).max(50).required(),
  password: Joi.string().min(8).max(20).required(),
  passwordConfirmation: Joi.string().min(8).max(20).required(),
});

const validateUser = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = validateUser;

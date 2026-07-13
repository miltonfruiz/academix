const { body, validationResult } = require('express-validator');

const validationRules = [
  body('username').exists().withMessage('Username is required'),
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
  body('email').exists().withMessage('Email is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').exists().withMessage('Password is required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
];

const validate = (req, res, next) => {
  validationRules.map(rule => rule.run(req));
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = validate;
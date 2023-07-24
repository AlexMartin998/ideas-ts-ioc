import { RequestHandler } from 'express';
import { body, param, validationResult } from 'express-validator';

const validate: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array().map(error => error.msg),
      error: 'Bad Request',
    });
  }

  return next();
};

export const validateMongoId = (paramString = 'id') => [
  param(paramString, 'Invalid ID').isMongoId(),
  validate,
];

export const idRules = () => [...validateMongoId(), validate];

// Auth
const emailPassRules = () => [
  body('email', 'Invalid email').isEmail(),
  body('password', 'Password must be longer than 6 characters').isLength({
    min: 6,
  }),
];

export const registerRules = () => {
  return [
    body('first_name', 'Invalid first name').notEmpty(),
    body('last_name', 'Invalid last name').notEmpty(),
    body('username', 'Invalid username').notEmpty(),
    ...emailPassRules(),
    validate,
  ];
};

export const loginRules = () => [...emailPassRules(), validate];

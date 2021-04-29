const {check, validationResult} = require('express-validator');
exports.validateRegisterRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('First Name is Required'),
    check('lastName')
    .notEmpty()
    .withMessage('Last Name is Required'),
    check('lastName'),
    check('email').
    isEmail()
    .withMessage('Valid Email is Required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be aleast 6 letters long')
  ];


  exports.validateLoginRequest = [
    check('email').
    isEmail()
    .withMessage('Valid Email is Required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be aleast 6 letters long')
  ];

  exports.isRequestValidated = (req, res, next) => {
const errors = validationResult(req);
if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg})
}

next();
  }
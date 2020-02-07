const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route       POST api/users
// @desc        Register user
// @access      public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmail(),
    check('username', 'Username must be a valid email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send('users endpoint');
  }
);

module.exports = router;

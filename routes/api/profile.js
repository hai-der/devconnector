const express = require('express');
const router = express.Router();

// @route       GET api/profile
// @desc        test route
// @access      public
router.get('/', (req, res) => {
  res.send('profile endpoint');
});

module.exports = router;
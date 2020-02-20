const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const users_ctrl = require('./users.ctrl');


// @route   POST api/users
// @desc    Register user
// @access  public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valide email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], users_ctrl.add_user);


module.exports = router; 
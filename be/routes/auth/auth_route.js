const express = require('express');
const router = express.Router();
const { check } = require('express-validator/check');
const auth_ctrl = require('./auth.ctrl');
const authorization = require('./../../middlewares/authorization');

// @route    GET /auth
// @desc     Get user by token
// @access   Private
router.get('/', authorization, auth_ctrl.get_user_by_token);


// @route   POST /auth
// @desc    Authenticate user and get token
// @access  public
router.post('/', 
[
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], auth_ctrl.user_login);



module.exports = router;
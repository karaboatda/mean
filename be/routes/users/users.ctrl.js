const express = require("express");
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require("config");
const { validationResult } = require('express-validator');
const User = require('../users/users.schema');


// @route   POST /users
// @desc    Register user
// @access  public
exports.add_user = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        // see if user exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        // get user gravatar
        const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });

        // create instance of the user
        user = new User({ name, email, avatar, password });
        // encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        // save user
        await user.save();
        // return jsonwebtoken
        const payload = { user: { id: user.id } };

        jwt.sign(payload, config.get('jwtSecret'),
            { expiresIn: 360000 }, (err, token) => {
                if (err) throw err;
                res.json({ token });
            });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}
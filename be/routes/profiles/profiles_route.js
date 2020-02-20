const express = require('express');
const router = express.Router();
const config = require("config");
const { check } = require('express-validator');
const profiles_ctrl = require('./profiles.ctrl');
const authorization = require('../../middlewares/authorization');
const axios = require('axios');



// @route    GET /profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', authorization, profiles_ctrl.get_user_profile);



// @route    POST /profile
// @desc     Create or update user profile
// @access   Private
router.post(
    '/',
    [
        authorization,
        [
            check('status', 'Status is required')
                .not()
                .isEmpty(),
            check('skills', 'Skills is required')
                .not()
                .isEmpty()
        ]
    ],
    profiles_ctrl.create_update_profile
);


// @route    GET /profile
// @desc     Get all profiles
// @access   Public
router.get('/', profiles_ctrl.get_all_profile);


// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', profiles_ctrl.get_profile_per_id);



// @route    DELETE /profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', authorization, profiles_ctrl.delete_per_token);




// @route    PUT /profile/experience
// @desc     Add profile experience
// @access   Private
router.put(
    '/experience',
    [
        authorization,
        [
            check('title', 'Title is required')
                .not()
                .isEmpty(),
            check('company', 'Company is required')
                .not()
                .isEmpty(),
            check('from', 'From date is required')
                .not()
                .isEmpty()
        ]
    ],
    profiles_ctrl.add_experience
);




// @route    DELETE /profile/experience/:exp_id
// @desc     Delete experience from profile
// @access   Private
router.delete('/experience/:exp_id', authorization, profiles_ctrl.delete_experience);




// @route    GET api/profile/github/:username
// @desc     Get user repos from Github
// @access   Public
router.get('/github/:username', async (req, res) => {
    try {
        // const options = {
        //     uri: encodeURI(
        //         `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc`
        //     ),
        //     method: 'GET',
        //     // headers: {
        //     //     'user-agent': 'node.js',
        //     //     Authorization: `token ${config.get('githubToken')}`
        //     // }
        // };

        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

        res.json({response});
        console.log(response);

        // request(options, (error, response, body) => {
        //     if (error) console.error(error);

        //     if (response.statusCode !== 200) {
        //         return res.status(404).json({ msg: 'No Github profile found' });
        //     }

        //     res.json(JSON.parse(body));
        // });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});





module.exports = router;
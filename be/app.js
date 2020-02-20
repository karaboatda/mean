// set up express
const express = require('express');
const app = express();
const morgan = require('morgan');
const connectDB = require('./config/db');


// log requests
app.use(morgan('dev'));


// ajust cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origine, X-Requested-With, Content-Type, Accept, Authorization, x-auth-token');
    if (req.method === 'OPTIONS') { 
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        res.status(200).json({});
    }
    next();
});


// Connect Database
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));


// routes
const profiles = require('./routes/profiles/profiles_route');
const users = require('./routes/users/users_route');
const auth = require('./routes/auth/auth_route');


app
    .use('/profiles', profiles)
    .use('/users', users)
    .use('/auth', auth)



/**
 * ⚠️ keep the following codes on the last ligne before exporting @express.app
 * collect errors from express
 */
app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
}).use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            app: 'check our API documentation'
        }
    });
});


// export app
module.exports = app;
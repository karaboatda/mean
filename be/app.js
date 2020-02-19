// set up express
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

/**
 * ⚠️ keep the following codes on the last ligne before exporting @express.app
 * collect errors from express
 */
app.use('/app', (req, res, next) => {
    res.status(200).json({
        app: 'hello from express app'
    })
});
app.use((req, res, next) => {
    const error =  new Error('not found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
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
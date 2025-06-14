import express from 'express';
const app = express();

// logger middleware
const logger = ((req, res, next) => {
    // Add timestamp to request object
    req.time = new Date(Date.now()).toString();
    
    // Log request details
    console.log(req.method, req.hostname, req.path, req.body, req.params, req.time);
    
    // next() is a callback function that tells Express to move to the next middleware/route handler
    // Without calling next(), the request would be left hanging
    next();
});

export default logger;
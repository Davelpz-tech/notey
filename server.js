const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//connect to static folder
app.use(express.static('public'));
//require route files
app.use(require('./route/api_route.js'))
app.use(require('./route/html_route.js'))
//Start server on dynamic port
app.listen(PORT, () => {
    //template literal to fill in dynamic port
    console.log(`API Server now on port ${PORT}`)
});
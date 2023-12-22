const express = require('express')
require('dotenv').config();
const PORT_NUMBER = process.env.PORT || 5000;
const app = express()
app.listen(PORT_NUMBER, () => {
    console.log(`Server started at ${PORT_NUMBER}`)
});
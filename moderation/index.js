const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {

}); // Event Handler

app.listen(4003, () => {
    console.log('Listening on 4003');
});
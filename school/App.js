const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const models = require('./models/index')

const app = express();
app.use(cors());

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
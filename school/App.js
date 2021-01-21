const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const models = require('./models/index');
const indexRouter = require('./routes/index');
const path = require('path');
const app = express();
app.use(cors());
// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
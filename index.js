const express = require('express');
const app = express();
const morgan = require('morgan');


const groupRoute = require('./routes/group')

app.use(morgan('dev'));
app.use(express.json())

app.use('', groupRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`App running on port: http://localhost:${port}/`);
});
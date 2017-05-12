const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true,}));

app.use('/', require('./routes')(express));

app.listen(port, () => {
  console.log('Server running on ', port);
});

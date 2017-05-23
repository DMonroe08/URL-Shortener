const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const tool = require('../lib/tool');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true,}));

app.use('/', require('./routes')(express));

app.listen(port, () => {
  tool.debug('Server running on ', port);
});

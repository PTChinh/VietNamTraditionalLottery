require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = 2020;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
// app.use('/bootstrap', express.static(__dirname + 'node_modules/bootstrap/dist/css'));
app.use(express.static('public'));

//Routes
app.get('/', (req, res) => res.render('main'));

app.listen(port, () => console.log('Server listening on port ' + port));
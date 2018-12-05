const express = require('express')
const path = require ('path')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express()
const models = require('./models/index');

//Add the folder views to the project
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Decode json and x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Add a bit of logging
app.use(morgan('short'))

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/createM', function (req, res) {
  res.render('create_monkey');
})

app.get('/createE', function (req, res) {
  res.render('create_enclosure');
})

app.post('/create_monkey', function(req, res) {
  models.ManagerM.create({
    name: req.body.name,
    enclosure_name: req.body.enclosure_name
  })
  .then(()=> {
    res.render('confirmationM')
  })
})

/*// Get all the users defined
app.get('/', function (req, res) {
  models.User.findAll()
    .then((users) => {
      res.json(users)
    })
})

// Add a new user to the database
app.post('/', function(req, res) {
  models.User.create({
    username: req.body.username
  })
    .then(() => {
      res.send('User added !')
    })
})*/

// Synchronize models
models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   * 
   * Listen only when database connection is sucessfull
   */
  app.listen(3000, function() {
    console.log('Express server listening on port 3000');
  });
});

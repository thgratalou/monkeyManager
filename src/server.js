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

//Get the index
  app.get('/', function (req, res) {
      res.render('index');
  })

//Get all the monkey
  app.get('/Monkey', function (req, res) {
    models.MonkeyM.findAll()
      .then((monkey) => {
        res.json(monkey)
      })
  })

//Get some specified monkey with enclosure
  app.get('/Monkey/:enclosure/get', function(req, res){
    models.MonkeyM.findAll({
      where: {enclosure: req.params.enclosure}
    })
    .then((monkey) =>{
      res.send(monkey)
    });
  })

//Get a monkey with his name
  app.get('/Monkey/:name/get', function(req, res){
    models.MonkeyM.findAll({
      where: {name: req.params.name}
    })
    .then((monkey) =>{
      res.send(monkey)
    });
  })

//Confirmation for create Monkey
  app.get('/createM', function (req, res) {
    res.render('create_monkey');
  })

//Confirmation for create Enclosure
  app.get('/createE', function (req, res) {
    res.render('create_enclosure');
  })

//Create a monkey
  app.post('/create_monkey', function(req, res) {
    models.ManagerM.create({
      name: req.body.name,
      enclosure_name: req.body.enclosure_name
    })
    .then(()=> {
      res.render('confirmationM')
    })
  })

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

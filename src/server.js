const express = require('express')
const path = require ('path')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express()
const models = require('./models/index');

//Add the folder views to the project
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  
  app.use('/static', express.static(__dirname + '/public'));

// Decode json and x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

// Add a bit of logging
  app.use(morgan('short'))

//Get the index
  app.get('/index', function (req, res) {
      res.render('index');
  })
  app.get('/', function (req, res) {
    res.render('index');
})

//Get all the monkey
  app.get('/Monkey', function (req, res) {
    models.Monkeys.findAll()
      .then((monkey) => {
        res.render('monkey', {title : 'Les singes : ', monkeys : monkey})
      })
  })

//Get some specified monkey with enclosure
  app.get('/Monkey/:enclosure/get', function(req, res){
    models.Monkeys.findAll({
      where: {enclosure: req.params.enclosure}
    })
    .then((monkey) =>{
      res.send('monkey', pName = Monkeys.name, pEnclosure = Monkeys.enclosure)
    });
  })

//Get a monkey with his name
  app.get('/Monkey/:name/get', function(req, res){
    models.Monkeys.findAll({
      where: {name: req.params.name}
    })
    .then((monkey) =>{
      res.send('monkey', pName = Monkeys.name, pEnclosure = Monkeys.enclosure)
    });
  })

//Get all the enclosures
  app.get('/Enclosures', function (req, res) {
    models.Enclosures.findAll()
      .then((enclosure) => {
        res.json(enclosure)
      })
  })

//Get an Enclosure with his name
  app.get('/Enclosure/:name/get', function(req, res){
    models.Enclosures.findAll({
      where: {name: req.params.name}
    })
    .then((enclosure) =>{
      res.send(enclosure)
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
    models.Monkeys.create({
      name: req.body.name,
      enclosure_name: req.body.enclosure_name
    })
    .then(()=> {
      res.render('confirmationM')
    })
  })

  //Create an enclosure
  app.post('/create_enclosure', function(req, res) {
    models.Enclosures.create({
      name: req.body.name
    })
    .then(()=> {
      res.render('confirmationE')
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

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
  app.get('/Monkeys', function (req, res) {
    models.Monkeys.findAll()
      .then((monkey) => {
        res.render('monkey', {title : 'Les singes : ', Monkeys : monkey})
      })
  })

//Get some specified monkey with enclosure
  app.get('/Monkeys/:enclosure_name', function(req, res){
    models.Monkeys.findAll({
      where: {enclosure_name: req.params.enclosure_name}
    })
    .then((monkey) =>{
      if(monkey != null) res.render('monkey', {title : 'Les singes par enclos : ', Monkeys : monkey})
      else res.status(404).send("Something blew up ;)")
    });
  })

//Get a monkey with his name
  app.get('/Monkeys/:name', function(req, res){
    models.Monkeys.findAll({
      where: {name: req.params.name}
    })
    .then((monkey) =>{
      if(monkey != null) res.render('monkey', {title : 'Les singes par nom : ', Monkeys : monkey})
      else res.status(404).send("Something blew up ;)")
    });
  })

  //Get a monkey with his id
  app.get('/Monkeys/:id', function(req, res){
    models.Monkeys.findById(req.params.id)
      .then((monkey) =>{
        if(monkey != null) res.render('monkeyID', {name : monkey.name, enclosure : monkey.enclosure_name, id : monkey.id})
        else res.status(404).send("Something blew up ;)")
      })
  })

//Get all the enclosures
  app.get('/Enclosures', function (req, res) {
    models.Enclosures.findAll()
      .then((enclosure) => {
        res.render('enclosure', {Enclosures : enclosure})
      })
  })

//Get an Enclosure with his name
  app.get('/Enclosures/:name', function(req, res){
    models.Enclosures.findAll({
      where: {name: req.params.name}
    })
    .then((enclosure) =>{
      if(enclosure != null) res.render('enclosure', {Enclosures : enclosure})
      else res.status(404).send("Something blew up ;)")
    });
  })

  //Get an Enclosure with his ID
  app.get('/Enclosures/:id', function(req, res){
    models.Enclosures.findById(req.params.id)
    .then((enclosure) =>{
      if(enclosure != null) res.render('enclosureID', {name : enclosure.name, id : enclosure.id})
      else res.status(404).send("Something blew up ;)")
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

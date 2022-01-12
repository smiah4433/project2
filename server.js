const express = require('express')
const app = express()
const methodOverride = require('method-override')
const PORT = 3000


////////Custom Middleware/////////
app.use(express.urlencoded({extended: true}))

//////method over ride/////
app.use(methodOverride('_method'))

///////Require Public////////
app.use(express.static('public'))

///////Require Models//////
const Movies = require('./models/movies')

///////Set Up Database//////
const mongoose = require('mongoose')

///////Name of the Database//////
const mongoURI = 'mongodb://127.0.0.1:27017/movies'
const db = mongoose.connection
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log('database connected')

})

db.on('error', (err) => { console.log('ERROR: ', err) })
db.on('connected', () => { console.log('mongo connected') })
db.on('disconnected', () => { console.log('mongo disconnected') })



//=============================
//        ROUTES
//=============================

///////New Route////////
app.get('/movies/new', (req, res) =>{
  Movies.find({}, (err, allMovies) => {
    res.render('new.ejs', {
      movies: allMovies
    })
  })
})

///////Index Route/////////
app.get('/movies', (req, res) => {
  Movies.find({}, (err, allMovies) => {
    res.render('index.ejs', {
      movies: allMovies
    })
  })
})


///////Show Route/////////
app.get('/movies/:id', (req, res) => {
  Movies.findById(req.params.id, (err, foundMovies) => {
    console.log(foundMovies);
    res.render('show.ejs', {
      movies: foundMovies
    })
  })   
})

///////Delete Route///////




///////Edit Route////////
app.get('/movies/:id/edit', (req, res) => {
  res.render('edit.ejs')
})




app.listen(PORT, () => {
  console.log(`Movie server listening on PORT ${PORT}`);
})

const express = require('express')
const app = express()
const methodOverride = require('method-override')



////////Custom Middleware/////////
app.use(express.urlencoded({extended: true}))

//////method over ride/////
app.use(methodOverride('_method'))

///////Require Public////////
app.use(express.static('public'))

/////////Require .env//////////
require('dotenv').config()
const PORT = process.env.PORT

///////Require Models//////
const Movies = require('./models/movies')
const Show = require('./models/shows')


///////Set Up Database//////
const mongoose = require('mongoose')

///////Name of the Database//////
const mongoURI = process.env.MONGO_URI
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
  Movies.find({}, (error, allMovies) => {
    res.render('new.ejs', {
      movies: allMovies
    })
  })
})

const allShows = Show.find({}, (error, foundShows) => {
  shows = foundShows
})
///////Index Route/////////
app.get('/movies', (req, res) => {
  Movies.find({}, (error, allMovies) => {
    res.render('index.ejs', {
      movies: allMovies, shows: shows
    })
  })
})

////////Post Route(Create)///////////
app.post('/movies', (req, res) => {
  Movies.create(req.body, (error, createdMovies) => {
    if(error) {
      res.send(error)
    } else {
      res.redirect('/movies')
    }
  })
})

///////Show Route/////////
app.get('/movies/:id', (req, res) => {
  Movies.findById(req.params.id, (error, foundMovies) => {
    console.log(foundMovies);
    res.render('show.ejs', {
      movies: foundMovies
    })
  })
})

///////Delete Route///////
app.delete('/movies/:id/', (req, res) => {
  Movies.findByIdAndDelete(req.params.id, (error, deletedMovies) => {
    if(error){
      res.send(error)
    } else {
      res.redirect('/movies')
    }
  })
})



///////Edit Route////////
app.get('/movies/:id/edit', (req, res) => {
  Movies.findById(req.params.id, (error, foundMovies) => {
    if(error) {
      res.send(error)
    } else {
      res.render('edit.ejs', {
        movies: foundMovies
      })
    }
  })
})

/////////Update Route/////////
app.get('/movies/:id', (req, res) => {
  Movies.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }, (error, updatedMovies) => {
    if(error) {
      res.send(error)
    } else {
      res.redirect('/movies')
    }
  })
})




app.listen(PORT, () => {
  console.log(`Movie server listening on PORT ${PORT}`);
})

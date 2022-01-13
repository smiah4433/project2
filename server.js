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
//        ROUTES/CONTROLLER
//============================
app.get('/', (req, res) => {
  Show.find({}, (error, allShows) => {
    Movies.find({}, (error, allMovies) => {
      res.render('home.ejs', {
        movies: allMovies, shows: allShows
      })
    })
  })
})

//////Makes the controller accessiable in this file////////////
const moviesController = require("./controllers/moviesController")
const showsController = require("./controllers/showsController")
///////// looks like setting up middleware//////////
app.use("/movies", moviesController)   ///Sets up the congig to use controllers
app.use("/shows", showsController)




app.listen(PORT, () => {
  console.log(`Movie server listening on PORT ${PORT}`);
})

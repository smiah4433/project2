const express = require('express')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')



////////Custom Middleware/////////
app.use(express.urlencoded({extended: true}))

//////method over ride/////
app.use(methodOverride('_method'))

///////Require Public////////
app.use(express.static('public'))

/////////Require .env//////////
require('dotenv').config()
const PORT = process.env.PORT

const SESSION_SECRET = process.env.SESSION_SECRET

///////Require Models//////
const Movies = require('./models/movies')
const Show = require('./models/shows')


///////Set Up Database//////
const mongoose = require('mongoose')

app.use(session({
  secret: SESSION_SECRET,
  resave: false, //https://www.npmjs.com/package/express-session#resave
  saveUninitialized: false // https://www.npmjs.com/package/express-session#resave
}))

app.use((req, res, next) => {
  res.locals.currentUser = req.session.currentUser
  // res.locals.authenticated;
  // if (req.session.currentUser) {
  //   res.locals.authenticated = true
  // }
  next()
})


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
const userController = require("./controllers/userController")
///////// looks like setting up middleware//////////
app.use("/movies", moviesController)   ///Sets up the congig to use controllers
app.use("/shows", showsController)
app.use("/users", userController)





app.listen(PORT, () => {
  console.log(`Movie server listening on PORT ${PORT}`);
})

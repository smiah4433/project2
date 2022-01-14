const express = require('express')
////////Using router/////////////
const router = express.Router()
const Movies = require('../models/movies')

//custom MIDDLEWARE to require authentication on routes
            // THIS IS CREATING THE MUST BE LOGGED IN TO DO STUFF ///
            const authRequired = (req, res, next) => {
              if (req.session.currentUser) {
                // a user is signed in
                next()
                // next is part of Express
                // it does what is says
                // i.e go on to the next thing
              }else{
                // if there is no user
                // make this an alert -> // res.send(‘you must be logged in to do that.‘)
                res.redirect('/users/signin')
              }
            }



//=============================
//        ROUTES
//=============================

///////New Route////////
router.get('/new', (req, res) =>{
  Movies.find({}, (error, allMovies) => {
    res.render('movies/new.ejs', {
      movies: allMovies
    })
  })
})


///////Index Route/////////
router.get('/', (req, res) => {
    Movies.find({}, (error, allMovies) => {
      res.render('movies/index.ejs', {
        movies: allMovies
      })
    })
  })

///////Movie show Route/////////
router.get('/:id', authRequired, (req, res) => {
  Movies.findById(req.params.id, (error, foundMovies) => {
    console.log(foundMovies);
    res.render('movies/show.ejs', {
      movies: foundMovies
    })
  })
})


////////Post Movie Route(Create)///////////
router.post('/', (req, res) => {
  console.log(req.body)
  Movies.create(req.body, (error, createdMovie) => {
    if(error) {
      res.send(error)
    } else {
      console.log(createdMovie);
      res.redirect('/movies')
    }
  })
})


///////Delete Movies Route///////
router.delete('/:id', (req, res) => {
  Movies.findByIdAndDelete(req.params.id, (error, deletedMovies) => {
    if(error){
      res.send(error)
    } else {
      res.redirect('/movies')
    }
  })
})


///////Edit Movie Route////////
router.get('/:id/edit', (req, res) => {
  Movies.findById(req.params.id, (error, foundMovies) => {
    if(error) {
      res.send(error)
    } else {
      res.render('movies/edit.ejs', {
        movies: foundMovies
      })
    }
  })
})


/////////Update Movies Route/////////
router.put('/:id', (req, res) => {
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



module.exports = router

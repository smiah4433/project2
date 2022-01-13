const express = require('express')
////////Using router/////////////
const router = express.Router()
const Show = require('../models/shows')

///////New Route////////
router.get('/new', (req, res) =>{
  Show.find({}, (error, allShows) => {
    res.render('shows/new.ejs', {
      shows: allShows
    })
  })
})

///////Index Route/////////
router.get('/', (req, res) => {
    Show.find({}, (error, allShows) => {
      res.render('shows/index.ejs', {
        shows: allShows
      })
    })
  })

  ///////Shows show Route/////////
  router.get('/:id', (req, res) => {
    Show.findById(req.params.id, (error, foundShows) => {
      console.log(foundShows);
      res.render('shows/show.ejs', {
        shows: foundShows,
      })
    })
  })


///////////Create Show Route//////////////
router.post('/', (req, res) => {
  Show.create(req.body, (error, createdShows) => {
    if(error) {
      res.send(error)
    } else {
      res.redirect('/shows')
    }
  })
})


////////Shows Delete Route/////////
router.delete('/:id', (req, res) => {
  Show.findByIdAndDelete(req.params.id, (error, deletedShows) => {
    if(error){
      res.send(error)
    } else {
      res.redirect('/shows')
    }
  })
})

//////////Edit Show Route//////
router.get('/:id/edit', (req, res) => {
  Show.findById(req.params.id, (error, foundShows) => {
    if(error) {
      res.send(error)
    } else {
      res.render('shows/edit.ejs', {
        shows: foundShows
      })
    }
  })
})

////////Update Shows Route/////////////
router.put('/:id', (req, res) => {
  Show.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }, (error, updatedShows) => {
    if(error) {
      res.send(error)
    } else {
      res.redirect('/shows')
    }
  })
})

module.exports = router

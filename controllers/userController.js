const express = require('express')
// we need to import the library
const bcrypt = require('bcrypt')
// we need our User MODEL
const User = require('../models/users')
const router = express.Router()

router.get('/register', (req, res) => {
  res.render('users/register.ejs')
})
router.post('/register', (req, res) => {
  // we need to encrypt our passwords
  // we can use the bcrypt libary for this
  // we need to import the library at the top of our file
  // first we need to generate salt
  const salt = bcrypt.genSaltSync(10)
  // salt is a random garbage we add to our encrypted passwords
  // the number we pass to genSaltSync determines how my salt
  // we are adding, the higher the number more secure, but the longer it takes
  // now we’re going to generate the actual hashed password
  req.body.password = bcrypt.hashSync(req.body.password, salt)
  console.log(req.body)
  // first let’s see if somebody else already has this username
  User.findOne({username: req.body.username}, (error, userExists) => {
    if(userExists) {
      res.send('that username is taken')
    } else {
      User.create(req.body, (error, createdUser) => {
        // res.send(‘user created’)
        req.session.currentUser = createdUser
        res.redirect('/home')
      })
    }
  })
})
router.get('/signin', (req, res) => {
  res.render('users/signin.ejs')
})
router.post('/signin', (req, res) => {
  // we need to get the user with that user name
  User.findOne({ username: req.body.username }, (error, foundUser) => {
    if (foundUser) {
      // if they do exist, we need compare their passwords
      // we can compare passwords using bcrypt’s compareSync function
      const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
      // compareSync returns true if they match
      // and false if they don’t match
      // if the passwords match, log then in
      if (validLogin) {
        console.log(foundUser)
        req.session.currentUser = foundUser
        // we are letting session know
        // that we have logged in
        res.redirect('/home')
      } else {
        // if they don’t match, send a message
        res.send('Invalid username or password')
      }
    } else {
      // if they don’t exist, we need to send a message
        res.send('Invalid username or password')
    }
  })
})
//////// DESTROY session route ////////
router.get('/signout', (req, res) => {
  // this DESTROYS the session
  req.session.destroy()
  res.redirect('/home')
})
module.exports = router

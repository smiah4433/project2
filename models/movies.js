const mongoose = require('mongoose')
const {Schema, model} = mongoose

const moviesSchema = new Schema ({
  title: {type: String, required: true},
  img: {type: String, required: true},
  rating: {type: Number, $gte: 0}
})

const Movies = model('Movies', moviesSchema)

module.exports = Movies

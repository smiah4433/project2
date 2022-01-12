const mongoose = require('mongoose')
const {Schema, model} = mongoose

const showsSchema = new Schema ({
  title: {type: String, required: true},
  img: {type: String, required: true},
  rating: {type: Number, $gte: 0}
})

const Show = model('Show', showsSchema)

module.exports = Show

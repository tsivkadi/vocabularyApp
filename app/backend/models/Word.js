const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
  title:{
    type: String,
    required: [true, 'specify title'],
    trim: true
  },
  definition:{
    type: String,
    required: [true, 'specify definition'],
    trim: true
  }
})

module.exports = mongoose.model('Word', wordSchema)
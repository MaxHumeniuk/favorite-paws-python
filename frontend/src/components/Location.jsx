// models/Location.js

const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String, // URL to an image
  lat: Number,
  lng: Number
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
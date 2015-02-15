'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IdeaSchema = new Schema({
  summary: {
      type: String, 
      required: true
    },
  description: {
      type: String, 
      required: false
    },
  category: {
      type: String, 
      required: true
    },
  rating: {
      type: Number, 
      required: true
    },
  images: {
    type: [],
    required: false
    },
  latitude: {
    type: Number,
    required: false
    },
  longitude: {
    type: Number,
    required: false
    },
  creator: {
      type: String, 
      required: true
    },
  created: {
      type: String, 
      required: true
    },
  active: {
      type: Boolean,
      default: true,
      required: true
    }
});

module.exports = mongoose.model('Idea', IdeaSchema);
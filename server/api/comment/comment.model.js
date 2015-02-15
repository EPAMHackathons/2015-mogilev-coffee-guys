'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  rating: {
      type: Number, 
      required: true
    },
  creator: {
    id: {
      type: String
    },
    name: {
      type: String
    }
  },
  created: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Comment', CommentSchema);

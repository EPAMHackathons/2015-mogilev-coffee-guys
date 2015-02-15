'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  title: {
      type: String, 
      required: true
    }
});

module.exports = mongoose.model('Category', CategorySchema);
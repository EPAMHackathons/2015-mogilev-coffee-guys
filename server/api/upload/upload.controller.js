'use strict';

// Get a single post
exports.show = function(req, res) {
  res.sendfile('./uploads/' + req.params.id);
};

// Creates a new post in the DB.
exports.create = function(req, res) {
  return res.json(201, req.files);
};

function handleError(res, err) {
  return res.send(500, err);
}
const User = require('../models/user');

module.exports = {
  index
}

function index(req, res, next) {
  res.render('index', {
    users,
    user: req.user
  });
}
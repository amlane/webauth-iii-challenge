const router = require('express').Router();

const Users = require('./users-model.js');
// const restricted = require('../auth/restricted-middleware.js');

router.get('/', (req, res) => { //removed restricted to test
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
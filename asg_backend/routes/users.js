const router = require('express').Router();
let User = require('../dbModels/userModel');

router.route('/').get((req, res) => {
  User.find()
  // mongoose method to get user 
    .then(users => res.json(users))
    // return user from data base json format
    .catch(err => res.status(400).json('Error: ' + err));
});
// user endpoint

router.route('/add').post((req, res) => {
  // create new user
  const username = req.body.username;
  const newUser = new User({username});

  newUser.save()
  // user is saved to database
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
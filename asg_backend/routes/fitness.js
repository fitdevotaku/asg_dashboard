const router = require('express').Router();
let Fitness = require('../dbModels/fitnessModel');

router.route('/').get((req, res) => {
  Fitness.find()
  // mongoose comand to search for list of data within our database
    .then(fitnesses => res.json(fitnesses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  // expected JSON variables in our JSON object when added new exercises

  const newFitness = new Fitness({
    username,
    description,
    duration,
    date,
  });

  newFitness.save()
  .then(() => res.json('A exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Fitness.findById(req.params.id)
    .then(fitness => res.json(fitness))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Fitness.findByIdAndDelete(req.params.id)
    .then(() => res.json('A exercise deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Fitness.findById(req.params.id)
    .then(fitness => {
      fitness.username = req.body.username;
      fitness.description = req.body.description;
      fitness.duration = Number(req.body.duration);
      fitness.date = Date.parse(req.body.date);
      // variables in objects of JSON body when updating fitness list

      fitness.save()
        .then(() => res.json('Exercise updated!'))
        // a promise
        
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
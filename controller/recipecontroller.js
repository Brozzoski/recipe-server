const router = require('express').Router();
const Recipe = require('../db').import('../models/recipe')
const validateSession = require('../middleware/validate-session');


//! PRACTICE ROUTE
router.get('/practice', function(req, res)
{
  res.send('Hey!! This is a practice route!')
})

//! GET ALL RECIPE
router.get('/', validateSession, Recipe, (req, res) => {ru
    Recipe.findAll()
        .then(recipe => res.status(200).json(recipe))
        .catch(err => res.status(500).json({ error: err }))
})

//! Create RECIPE
router.post('/new', validateSession, (req, res) => {
    const newRecipe = {

        name: req.body.recipe.name,
        temp: req.body.recipe.temp,
        time: req.body.recipe.time, 
        ingredients: req.user.recipe.ingredients,
        instruction: req.user.recipe.instruction

    }

    Recipe.create(newRecipe)
        .then(recipe => res.status(200).json(recipe))
        .catch(err => res.status(510).json({ error: err }))    
})

//! GET by Name
router.get('/:name', validateSession, (req, res) => {  
    recipe.findOne({ where: { titleOfRecipe: req.params.name }})  
      .then(recipe => res.status(200).json(recipe))
      .catch(err => res.status(500).json({ error: err }))
  })
  
//! UPDATE by ID
router.put('/:id',validateSession, (req, res) => {
    recipe.update(req.body, { where: { id: req.params.id }})  
      .then(recipe => res.status(200).json(recipe))
      .catch(err => res.status(500).json({error: err})) 
  })

//! DELETE
router.delete('/:id', validateSession, (req, res) => {
    recipe.destroy({
        where: { id: req.params.id }
    })
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(500).json({ error: err }))
})   

module.exports = router;
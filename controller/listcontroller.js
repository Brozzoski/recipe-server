const router = require('express').Router();
const List = require('../db').import('../models/list')
const validateSession = require('../middleware/validate-session');


//! PRACTICE ROUTE
router.get('/practice', function(req, res)
{
  res.send('Hey!! This is a practice route!')
})
//! GET ALL LISTS
router.get('/', validateSession, (req, res) => {
  List.findAll()
      .then(list => res.status(200).json(list))
      .catch(err => res.status(500).json({ error: err }))
})

//! Create List 
router.post('/new', validateSession, (req, res) => {
  const newList = {

      name: req.body.list.name,
      items: req.body.list.items,
    
  }

  List.create(newList)
      .then(list => res.status(200).json( list ))
      .catch(err => res.status(510).json({ error: err }))    
})

//! GET by Name
router.get('/:name', validateSession, (req, res) => {  
  List.findOne({ where: { nameOfList: req.params.title }})  
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ error: err }))
})

//! GET by Tags
router.get('/:tags', validateSession, (req, res) => {  
List.findOne({ where: { nameOfList: req.params.tags }})  
  .then(list => res.status(200).json(list))
  .catch(err => res.status(500).json({ error: err }))
})

//! UPDATE by ID
router.put('/:id', validateSession, (req, res) => {
  List.update(req.body, { where: { id: req.params.id }})  
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({error: err})) 
})

//! DELETE
router.delete('/:id', validateSession, (req, res) => {
  List.destroy({
      where: { id: req.params.id }
  })
  .then(list => res.status(200).json(list))
  .catch(err => res.status(500).json({ error: err }))
})   


module.exports = router;
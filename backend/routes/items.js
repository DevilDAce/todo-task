const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database

router.get('/', (req, res) => {
    res.send('work please');
  });
  
  router.get('/users', (req, res) => {
    res.send('List of users');
  });
  
  router.post('/users', (req, res) => {

  });

router.get('/items', itemsController.getTodos)
router.get('/item/:id', itemsController.getTodo)
router.post()
router.patch()
router.delete()
module.exports = router


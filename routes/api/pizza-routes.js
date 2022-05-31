const router = require('express').Router();

// Set up GET all and POST a /api/pizzas
router  .route('/')
.get()
.post();

// set up GET one, PUT, and DELETE at /api/pizzas/:id
router 
    .route('/:id')
    .get()
    .put()
    .delete();

    module.exports = router;
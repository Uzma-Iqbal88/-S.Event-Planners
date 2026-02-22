const express = require('express');
const router = express.Router();

router.get('/reviews', async (req, res) => {
  res.send('Get all reviews');
});

router.post('/reviews', async (req, res) => {
  res.send('Create a new review');
});

router.get('/reviews/:id', async (req, res) => {
  res.send('Get a single review');
});

router.put('/reviews/:id', async (req, res) => {
  res.send('Update a review');
});

router.delete('/reviews/:id', async (req, res) => {
  res.send('Delete a review');
});

module.exports=router;

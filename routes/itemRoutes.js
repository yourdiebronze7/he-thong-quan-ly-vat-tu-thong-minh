const express = require('express');
const router = express.Router();
const Item = require('../models/item');

let items = [];

router.post('/', (req, res) => {
  const { name, origin, producer, history } = req.body;
  const newItem = new Item(name, origin, producer, history);
  items.push(newItem);
  res.status(201).json(newItem);
});

router.get('/', (req, res) => {
  res.status(200).json(items);
});

module.exports = router;
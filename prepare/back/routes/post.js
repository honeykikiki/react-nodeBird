const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  // post / post
  res.json({ id: 1, content: 'hello' });
});

router.delete('/', (req, res) => {
  //delete / post
  res.send({ id: 1 });
});

module.exports = router;

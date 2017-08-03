'use strict';

const express = require('express'),
      router = express.Router();

router.use((req, res, next) => {
  // check api key?

  next()
});

router.get(`/`, (req, res) => {
  res.send(``);
});

export default router;
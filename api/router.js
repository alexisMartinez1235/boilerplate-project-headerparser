const express = require('express');
const router = express.Router()


// your first API endpoint...
router.get('/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

router.get('/whoami', (req, res) => {
  const ipaddress = req.headers['x-forwarded-for'];
  const software = req.headers["user-agent"];

  // console.log(software);
  
  res.json({
    ipaddress,
    language: req.acceptsLanguages(),
    software
  });
});

module.exports = router;

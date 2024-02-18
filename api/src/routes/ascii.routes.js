const { Router } = require('express');
const ctr = require('../controllers/ascii.controllers');
const path = require('path');

const router = Router();

router.get('/', (req, res) => {
  const dir = __dirname.split('\\src\\routes')[0];
  // res.send('Under dev');
  res.sendFile(path.join(dir, '/public/createAscii.html'));
})

router.post('/test', ctr.asciiTest);

router.post('/', ctr.asciifyImgAndCloudinaryUpload);

module.exports = router;

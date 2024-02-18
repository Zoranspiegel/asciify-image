const { Router } = require('express');
const ctr = require('../controllers/ascii.controllers');
const path = require('path');

const router = Router();

router.get('/', (req, res) => {  
  let dir;

  if (__dirname.includes('\\')) {
    dir = __dirname.split('\\src\\routes')[0];
  } else {
    dir = __dirname.split('/src/routes')[0];
  }
  
  res.sendFile(path.join(dir, '/public/createAscii.html'));
})

router.post('/test', ctr.asciiTest);

router.post('/', ctr.asciifyImgAndCloudinaryUpload);

module.exports = router;

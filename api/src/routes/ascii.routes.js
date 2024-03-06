const { Router } = require('express');
const ctr = require('../controllers/ascii.controllers');
const path = require('path');

const router = Router();

router.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, '..', '..', 'public', 'createAscii.html');
  res.status(200).sendFile(filePath);
})

router.post('/avatar', ctr.asciifyAvatarAndCloudinaryUpload);

router.post('/', ctr.asciifyImgAndCloudinaryUpload);

module.exports = router;

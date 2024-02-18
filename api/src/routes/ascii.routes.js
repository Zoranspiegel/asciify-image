const { Router } = require('express');
const ctr = require('../controllers/ascii.controllers');

const router = Router();

router.post('/test', ctr.asciiTest);

router.post('/', ctr.asciifyImgAndCloudinaryUpload);

module.exports = router;

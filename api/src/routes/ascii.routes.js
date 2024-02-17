const { Router } = require('express');
const ctr = require('../controllers/ascii.controllers');

const router = Router();

router.post('/', ctr.asciifyImgAndCloudinaryUpload);

module.exports = router;

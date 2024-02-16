const { Router } = require('express');
const { asciifyImage } = require('../services/asciifyImage.service');
const { imagifyText } = require('../services/imagifyText.service');
const { uploadToCloudinary } = require('../services/uploadToCloudinary.service');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { imgUrl, imgName, color } = req.body;
    const asciiText = await asciifyImage(imgUrl);
    const asciiImage = await imagifyText(asciiText, color);
    const data = await uploadToCloudinary(asciiImage, imgName);
    res.status(200).json({ data });
  } catch (error) {
    const cleanError = error.message ? error.message : error;
    res.status(500).json({ error: cleanError });
  }
});

module.exports = router;

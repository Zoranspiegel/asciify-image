const { Router } = require('express');
const { asciifyImg } = require('../services/asciifyImage');
const { textToImg } = require('../services/textToImage');

const router = Router();

router.get('/', (req, res) => {
  res.json('Under dev');
});

router.post('/', async (req, res) => {
  try {
    const { imgUrl, imgName, color } = req.body;

    // CONVERT IMG TO ASCII ART TEXT
    const asciiText = await asciifyImg(imgUrl);

    //CONVERT ASCII ART TEXT TO IMG AND UPLOAD TO CLOUDINARYY
    await textToImg(asciiText, imgName, color)
      .then((img) => {
        res.status(200).json({ img });        
      })
      .catch(error => {
        throw new Error(error);
      })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const { asciifyImage } = require('../services/asciifyImage.service');
const { imagifyText } = require('../services/imagifyText.service');
const { uploadToCloudinary } = require('../services/uploadToCloudinary.service');
const { notFoundPage } = require('../utils/not-found-page');

const asciifyImgAndCloudinaryUpload = async (req, res) => {
  
  try {
    const { img_url, img_name, color, bg_color, definition } = req.body;

    if (!img_url) {
      return res.status(404).send(notFoundPage);
    }

    // CONVERTIR IMAGEN EN UNA STRING DE ASCII
    const asciiText = await asciifyImage(img_url, definition);

    // CONVERTIR STRING DE ASCII EN UNA IMAGEN ASCII (BASE64)
    const asciiImage = await imagifyText(asciiText, color, bg_color, definition);

    // SUBIR IMAGEN ASCII A CLOUDINARY Y RECIBIR URL SEGURA DE ALOJAMIENTO
    const img = await uploadToCloudinary(asciiImage, img_name);
    
    res.status(201).json({ img });
  } catch (error) {
    const cleanError = error.message ? error.message : error;
    res.status(500).json({ error: cleanError });
  }
}

const asciiTest = (req, res) => {
  res.status(200).json(req.body);
}

module.exports = {
  asciifyImgAndCloudinaryUpload,
  asciiTest
}

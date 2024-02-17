const { asciifyImage } = require('../services/asciifyImage.service');
const { imagifyText } = require('../services/imagifyText.service');
const { uploadToCloudinary } = require('../services/uploadToCloudinary.service');

const asciifyImgAndCloudinaryUpload = async (req, res) => {
  
  try {
    const { imgUrl, imgName, color, bg_color, definition } = req.body;

    // CONVERTIR IMAGEN EN UNA STRING DE ASCII
    const asciiText = await asciifyImage(imgUrl, definition);

    // CONVERTIR STRING DE ASCII EN UNA IMAGEN ASCII (BASE64)
    const asciiImage = await imagifyText(asciiText, color, bg_color, definition);

    // SUBIR IMAGEN ASCII A CLOUDINARY Y RECIBIR URL SEGURA DE ALOJAMIENTO
    const data = await uploadToCloudinary(asciiImage, imgName);
    
    res.status(200).json({ data });
  } catch (error) {
    const cleanError = error.message ? error.message : error;
    res.status(500).json({ error: cleanError });
  }
}

module.exports = {
  asciifyImgAndCloudinaryUpload
}

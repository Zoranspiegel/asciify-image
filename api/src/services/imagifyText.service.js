const textToImage = require('text-to-image');
const { textToImageConfig } = require('../config/textToImageConfig');

const imagifyText = async (text, textColor, bgColor, definition) => {
  
  // CONVERTIR STRING DE ASCII EN IMAGEN ASCII (BASE64)
  const asciifyImage = await textToImage.generate(text, textToImageConfig(textColor, bgColor, definition))

  // RETORNAR IMAGEN ASCII (BASE64)
  return asciifyImage;
};

module.exports = {
  imagifyText
}

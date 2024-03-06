const textToImage = require('text-to-image');
const { textToAvatarConfig } = require('../config/textToAvatarConfig');

const avatarifyText = async (text, textColor, bgColor, definition) => {
  
  // CONVERTIR STRING DE ASCII EN IMAGEN ASCII (BASE64)
  const asciifyImage = await textToImage.generate(text, textToAvatarConfig(textColor, bgColor, definition))

  // RETORNAR IMAGEN ASCII (BASE64)
  return asciifyImage;
};

module.exports = {
  avatarifyText
}

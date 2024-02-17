const textToImage = require('text-to-image');
const { registerFont } = require('canvas');

registerFont('./public/fonts/Consolas.ttf', { family: 'monospace' });

const imagifyText = async (text, textColor, bgColor) => {
  
  // CONVERTIR STRING DE ASCII EN IMAGEN ASCII (BASE64)
  const asciifyImage = await textToImage.generate(
    text,
    {
      bgColor,
      customHeight: 0,
      bubbleTail: { width: 0, height: 0 },
      debug: false,
      debugFilename: '',
      fontFamily: 'monospace',
      fontPath: '',
      fontSize: 11,
      fontWeight: 'bold',
      lineHeight: 13,
      margin: 25,
      maxWidth: 3840,
      textAlign: 'center',
      textColor,
      verticalAlign: 'top'
    }
  )

  // RETORNAR IMAGEN ASCII (BASE64)
  return asciifyImage;
};

module.exports = {
  imagifyText
}

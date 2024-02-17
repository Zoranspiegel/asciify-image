const textToImage = require('text-to-image');

const imagifyText = async (text, color) => {
  
  // CONVERTIR STRING DE ASCII EN IMAGEN ASCII (BASE64)
  const asciifyImage = await textToImage.generate(
    text,
    {
      bgColor: 'black',
    textColor: color,
    fontFamily: 'monospace',
    fontSize: 11,
    fontWeight: 'bold',
    lineHeight: 13,
    textAlign: 'center',
    maxWidth: 3840,
    margin: 25
    }
  )

  // RETORNAR IMAGEN ASCII (BASE64)
  return asciifyImage;
};

module.exports = {
  imagifyText
}

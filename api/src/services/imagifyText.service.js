const textToImage = require('text-to-image');

const imagifyText = async (text, color) => {
  
  // CONVERTIR STRING DE ASCII EN IMAGEN ASCII (BASE64)
  const asciifyImage = await textToImage.generate(
    text,
    {
      bgColor: 'black',
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
      textColor: color,
      verticalAlign: 'top'
    }
  )

  // RETORNAR IMAGEN ASCII (BASE64)
  console.log(asciifyImage.slice(0,20));
  return asciifyImage;
};

module.exports = {
  imagifyText
}

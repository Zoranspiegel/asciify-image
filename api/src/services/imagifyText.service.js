const textToImage = require('text-to-image');
const fs = require('fs');

const imagifyText = async (text, color) => {
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
  return asciifyImage;
};

module.exports = {
  imagifyText
}

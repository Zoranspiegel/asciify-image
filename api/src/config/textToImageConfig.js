const { registerFont } = require('canvas');

registerFont('./public/fonts/Consolas.ttf', { family: 'monospace' });


const textToImageConfig = (textColor, bgColor, definition) => {
  const lowDef = {
    bgColor,
    customHeight: 0,
    bubbleTail: { width: 0, height: 0 },
    debug: false,
    debugFilename: '',
    fontFamily: 'monospace',
    fontPath: '',
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 40,
    margin: 0,
    maxWidth: 3840,
    textAlign: 'center',
    textColor,
    verticalAlign: 'top'
  };
  
  const midDef = {
    bgColor,
    customHeight: 0,
    bubbleTail: { width: 0, height: 0 },
    debug: false,
    debugFilename: '',
    fontFamily: 'monospace',
    fontPath: '',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 21,
    margin: 0,
    maxWidth: 3840,
    textAlign: 'center',
    textColor,
    verticalAlign: 'top'
  };
  
  const highDef = {
    bgColor,
    customHeight: 0,
    bubbleTail: { width: 0, height: 0 },
    debug: false,
    debugFilename: '',
    fontFamily: 'monospace',
    fontPath: '',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    margin: 0,
    maxWidth: 3840,
    textAlign: 'center',
    textColor,
    verticalAlign: 'top'
  }
  
  switch (definition) {
    case 'low':
      return lowDef;
    case 'mid':
      return midDef;
    case 'high':
      return highDef;
    default:
      return midDef;
  }
}

module.exports = {
  textToImageConfig
}

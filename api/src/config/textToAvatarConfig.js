const { registerFont } = require('canvas');

registerFont('./public/fonts/Consolas.ttf', { family: 'monospace' });


const textToAvatarConfig = (textColor, bgColor, definition) => {
  if (!textColor) {
    textColor = 'green';
  }

  if (!bgColor) {
    bgColor = 'black'
  };
  
  const lowDef = {
    bgColor,
    customHeight: 0,
    bubbleTail: { width: 0, height: 0 },
    debug: false,
    debugFilename: '',
    fontFamily: 'monospace',
    fontPath: '',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 13,
    margin: 0,
    maxWidth: 1280,
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
    fontSize: 6,
    fontWeight: 'bold',
    lineHeight: 7,
    margin: 0,
    maxWidth: 1280,
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
    fontSize: 4,
    fontWeight: 'bold',
    lineHeight: 5,
    margin: 0,
    maxWidth: 1280,
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
  textToAvatarConfig
}

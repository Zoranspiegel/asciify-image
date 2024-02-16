const asciify = require('asciify-image');

const _ = {};

_.asciifyImg = async (img) => {
  const data = await asciify(img, {
    format: 'array',
    color: false,
    fit: 'width',
    width: 300
  })
    .then((arrImg) => {
      return arrImg.map(row => {
        return row.map(char => {
          // SPACES: '\xA0'
          switch (char) {
            case ';':
              return '\xA0';
            case 'i':
              return ';';
            case '1': 
              return 'i';
            default:
              return char;
          }
        }).join('')
      }).join('\n');
    })
    .catch(err => {
      throw err.message;
    });

  return data;
}

module.exports = _;

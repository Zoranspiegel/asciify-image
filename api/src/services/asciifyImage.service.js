const asciiToImage = require('asciify-image');

// const asciifyImage = (img) => {
//   return new Promise((resolve, reject) => {
//     asciiToImage(img, { color: false, fit: 'width', width: 10 })
//       .then(res=> {
//         resolve(res);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   })
// }

const asciifyImage = async (img) => {
  // CONVERTIR IMAGEN EN UN ARREGLO DE ASCII
  const rawAssciImg = await asciiToImage(img, {
    format: 'array',
    color: false,
    fit: 'width',
    width: 300
  });

  // MODIFICAR EL ARREGLO DE ASCII Y CONVERTIR EN UNA STRING
  const assciImg = rawAssciImg.map(row => {
    return row.map(char => {
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
    }).join('');
  }).join('\n');

  // RETORNAR STRING DE ASCII
  return assciImg;
};

module.exports = {
  asciifyImage
}
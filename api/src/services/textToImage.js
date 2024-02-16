const textToImage = require('text-to-image');
const { v2: cloudinary } = require('cloudinary');

const _ = {};

_.textToImg = async (asciiText, imgName, color) => {
  let response;
  await textToImage.generate(asciiText, {
    bgColor: 'black',
    textColor: color,
    fontFamily: 'monospace',
    fontSize: 11,
    fontWeight: 'bold',
    lineHeight: 13,
    textAlign: 'center',
    maxWidth: 3840,
    margin: 25
  })
    .then(async (dataUri) => {
      let img;
      await cloudinary.uploader.upload(
        dataUri,
        {
          public_id: imgName,
          folder: 'ASCII Imagess',
          // width: 1920,
          // crop: 'scale',
          // quality: 'auto:best',
          // fetch_format: 'auto'
        },
        (error, picture) => {
          if (error) throw new Error('Unable to upload profile_picture');
          if (picture) {
            img = picture.secure_url;
            // const img = picture.secure_url;
            // res.status(200).json({ img });
          }
        }
      );
      response = img;
    })
    return response;
};

module.exports = _;

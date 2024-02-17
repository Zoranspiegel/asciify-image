const { v2: cloudinary } = require('cloudinary');

const uploadToCloudinary = async (image, name) => {
  
  // SUBIR IMAGEN ASCII A CLOUDINARY
  const data = await cloudinary.uploader.upload(image, {
    public_id: name,
    folder: 'ASCII Images',
    // width: 1920,
    // crop: 'scale',
    // quality: 'auto:best',
    // fetch_format: 'auto'
  })

  // RETORNAR URL SEGURA DE LA IMAGEN ALOJADA EN CLOUDINARY
  return data.secure_url;
}

module.exports = {
  uploadToCloudinary
}

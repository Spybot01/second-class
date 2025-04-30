const cloudinary = require('cloudinary').v2;
require('dotenv').config();
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
});
const fileUpload =  async(req, res)=>{
    const url = 'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg'
    const uploadResult = await cloudinary.uploader
       .upload(url, { public_id: 'shoes',})
       .catch((error) => {
           console.log(error);
           res.status(401).json({message: 'Error uploading image', error});

       });
    
    console.log(uploadResult);
    if(uploadResult) {
        res.status(201).json({message: 'Image uploaded successfully'});
    }
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
}
module.exports = fileUpload
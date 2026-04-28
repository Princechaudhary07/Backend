const nanoid = require('nanoid');
const Url = require('../models/urlModel');

const  generateUrl=async(req,res)=>{
    const {url}=req.body;
    if(!url){
        return res.status(404).json({message:'URL is required'});
    }
    const urlId=nanoid.nanoid(7);
    const data= await Url.create({
        actualUrl:url,
        shortUrl:urlId


    })
    res.json(data.shortUrl);

}
module.exports={generateUrl};
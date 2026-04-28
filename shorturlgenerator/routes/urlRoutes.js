const express=require('express');
const {generateUrl}=require('../controllers/urlController');
const router=express.Router();

router.post('/',generateUrl);
module.exports=router;
const express=require('express');
const app=express();
const router=require('./routes/urlRoutes');
const connectDB=require('./config/db');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/url',router);



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
    connectDB();
});
//authentication and authorization 

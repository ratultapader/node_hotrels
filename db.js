const mongoose =require('mongoose');
const mongoURL='mongodb://localhost:27017/hotels'
mongoose.connect(mongoURL,{
    useNewUrlparser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection; 
db.on('connected',()=>{
    console.log('connected to the server');
});
db.on('error',()=>{
    console.log('connected to the server');
});
db.on('disconnected',()=>{
    console.log('connected to the server');
});
module.exports=db;

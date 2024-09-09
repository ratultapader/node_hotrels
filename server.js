const express = require('express');
const app = express();
const db=require('./db');
const person=require('./models/person');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})
// app.get('/chicken',function(req,res){
//     res.send('hi')

// })

app.post('/person',async(req,res)=>{
  try{
  const data=req.body
   const newPerson=new person(data);
  const response=await newPerson.save();
  console.log('data saved');
  res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internel server error'});
  }



})

app.get('/person',async(req,res)=>{
  try{
    const data=await person.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internel server error'});

  }
})

app.listen(3000,()=>{
    console.log('server is live');
})


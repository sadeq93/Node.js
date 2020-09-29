const express =require('express');
const app = express()
// 
app.get('/',(req,res)=>{
  res.send('hello from backend to frontend')
})
const port = 4444;
app.listen(port)
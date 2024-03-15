const express = require('express');  
const app = express();
//app.use(express.static('public')); <-- index.html needed, from .get we can open specific files

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/nav.html')
})
app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/public/signup.html')
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/public/navbar.html')
})

app.listen(5000);


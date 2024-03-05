const express = require('express');
const app = express();
//app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/nav.html')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html')
})
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})
app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})
app.listen(5000);
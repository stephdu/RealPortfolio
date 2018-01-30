//it requires express for the app the run
const express = require('express');
// creating a new express app
const app = express();
//where it will be running
const PORT = 3000;
//db=database;directory - db, file called contacts
//const CONTACTS = require('./db/contacts');
const bodyParser = require('body-parser');

app.use(express.static(__dirname));
//defining what's called a route; what we see after the URL when we go to a page; giving it a specific name = end point
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
//http request = get; retrieving data
app.get('/aboutme',(req, res) => {
  res.sendFile(__dirname + '/aboutme.html')
})

app.get('/pictures',(req, res) => {
  res.sendFile(__dirname + '/pictures.html')
})
app.get('/contact',(req, res) => {
  res.sendFile(__dirname + '/contact.html')
})
//post = inserts something
app.post('/contact', (req, res) => {
  let {email, text} = req.body;
  console. log (req. body)
  return CONTACTS.add(email, text)
  .then (contact => res.sendFile(__dirname + '/index.html'))
  res. sendFile(__dirname + '/index.html');
})
//listen for requests incoming for the server
app.listen(PORT, () => console.log(`Your Application is LIVE on localhost:${PORT}`))

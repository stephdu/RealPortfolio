const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html')
}

app.get('/contact',(req,res)) => {
  res.sendFile(__dirname + '/contact.html')
}

app.get('/about me',(req,res)) => {
  res.sendFile(__dirname + '/aboutme.html')
}


app.listen(3000, () => console.log('LIVE on 3000'))

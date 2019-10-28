const express = require('express')
const ejs = require('ejs');

const app = express()
const port = 3000

app.use(express.static('views'))
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');


app.use(express.static('data'))
app.use(express.static('assets'))
app.get('/', (req, res) => {
  res.render('index.html', {})
})

app.get('/tensor2d', (req, res) => {
  res.render('tensor2d.html', {})
})

app.get('/tensorrecognition', (req, res) => {
  res.render('tensorrecognition.html', {})
})

app.get('/tensorimageclassifier_image', (req, res) => {
  res.render('tensorimageclassifier_image.html', {})
})

app.get('/tensorimageclassifier_webcam', (req, res) => {
  res.render('tensorimageclassifier_webcam.html', {})
})

app.get('/data',(req,res)=>{
  let data = {
    name:'ganda',
    age:24
  }
  res.send(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
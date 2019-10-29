const express = require('express')
const ejs = require('ejs');

const router_module = require('./router_module.js');

// express
const app = express()
const port = 3000

// ejs template engine
app.use(express.static('views'))
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// socket io
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// --------------------------------------------------------------
io.on('connection', function (socket) {
  // console.log('a user connected');
  socket.on('disconnect', function () {
      console.log('disconnected');
  });

  socket.on('datatensor', function (msg) {
      io.emit('datatensor', msg);
  });
});


app.use(express.static('data'))
app.use(express.static('assets'))
app.get('/', (req, res) => {
  res.render('index.html', {})
})

app.get('/tensor2d', (req, res) => {
  //Making predictions from 2d data
  res.render('tensor2d.html', {})
})

app.get('/tensorrecognition', (req, res) => {
  //Handwritten digit recognition with CNNs
  res.render('tensorrecognition.html', {})
})

app.get('/tensortraniningpredictionnodejs', (req, res) => {
  //Training and Prediction in Node.js
  router_module.Test_TensorFlow_Baseball();
  res.render('tensortrainingpredictionnodejs.html', {})
})

app.get('/tensorimageclassifier_image', (req, res) => {
  //Transfer learning image classifier (image)
  res.render('tensorimageclassifier_image.html', {})
})

app.get('/tensorimageclassifier_webcam', (req, res) => {
  //Transfer learning image classifier (webcam)
  res.render('tensorimageclassifier_webcam.html', {})
})


// app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // listen by express
server.listen(3000); // listen by socket io
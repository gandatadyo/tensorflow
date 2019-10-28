const fs = require('fs')
const jpeg = require('jpeg-js');


// convert image to pixel
const readImage = path => {
  const buf = fs.readFileSync(__dirname+'/data/JlUvsxa.jpg')
  const pixels = jpeg.decode(buf, true)
  return pixels
}
console.log(readImage());

//
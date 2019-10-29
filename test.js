const fs = require('fs')
const jpeg = require('jpeg-js');
const pitch_type = require('./pitch_type.js');


// convert image to pixel
// const readImage = path => {
//   const buf = fs.readFileSync(__dirname+'/data/JlUvsxa.jpg')
//   const pixels = jpeg.decode(buf, true)
//   return pixels
// }
// console.log(readImage());

// test tensorflow
const TIMEOUT_BETWEEN_EPOCHS_MS = 500;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function TensforFlow_Baseball(){
  let numTrainingIterations = 10;
  for (var i = 0; i < numTrainingIterations; i++) {
    console.log(`Training iteration : ${i+1} / ${numTrainingIterations}`);
    await pitch_type.model.fitDataset(pitch_type.trainingData, {epochs: 1});
    console.log('accuracyPerClass', await pitch_type.evaluate(true));
    await sleep(TIMEOUT_BETWEEN_EPOCHS_MS);
  }
  console.log('finish');
  // let data = await pitch_type.predictSample(sample)
}


TensforFlow_Baseball()
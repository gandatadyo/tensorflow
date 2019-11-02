const fs = require('fs')
const pitch_type = require('./pitch_type.js');
const mobilenet = require('@tensorflow-models/mobilenet');
const knnClassifier = require('./assets/knn-classifier.min.js');
const tf = require('@tensorflow/tfjs');
let decode = require('image-decode')

const urlcloud = __dirname + '/data/awan/'
const urlsea = __dirname + '/data/laut/'
// const imgurl = __dirname + '/data/JlUvsxa.jpg'
// const imgurl1 = __dirname + '/data/JURU.jpg'


// [convert image to pixel]
const ConvertImage = (urlImage) => {
  let { data, width, height } = decode(fs.readFileSync(urlImage))
  return data
}
// tf.tensor(ConvertImage(imgurl)).print();
// tf.tensor(ConvertImage(imgurl1)).print();


// [test tensorflow]
// const TIMEOUT_BETWEEN_EPOCHS_MS = 500;
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function TensforFlow_Baseball(){
//   let numTrainingIterations = 10;
//   for (var i = 0; i < numTrainingIterations; i++) {
//     console.log(`Training iteration : ${i+1} / ${numTrainingIterations}`);
//     await pitch_type.model.fitDataset(pitch_type.trainingData, {epochs: 1});
//     console.log('accuracyPerClass', await pitch_type.evaluate(true));
//     await sleep(TIMEOUT_BETWEEN_EPOCHS_MS);
//   }
//   console.log('finish');
// }
// TensforFlow_Baseball()

// [Image Classifycation]
const classifier = knnClassifier.create();
const TensforFlow_kknClassifier = async classId => {
  // tf.tensor([1, 2, 3, 4]).print();

  // tf.tensor(ConvertImage(urlcloud + '1.jpg')).print();
  net = await mobilenet.load();
  const activation = net.infer(ConvertImage(urlcloud + '1.jpg'), 'conv_preds');
  activation.print();

  // classifier.addExample(tf.tensor(ConvertImage(urlcloud + '1.jpg')), 'A');
  // classifier.addExample(tf.tensor(ConvertImage(urlcloud+'1.jpg')), 'A');
  // classifier.addExample(tf.tensor(ConvertImage(urlcloud+'1.jpg')), 'A');
  // classifier.addExample(tf.tensor(ConvertImage(urlcloud+'1.jpg')), 'A');
  // classifier.addExample(tf.tensor(ConvertImage(urlcloud+'1.jpg')), 'A');
  // classifier.addExample(tf.tensor(ConvertImage(urlcloud+'1.jpg')), 'A');

  // classifier.addExample(tf.tensor([1, 2, 4, 1]), 'B');
  // classifier.addExample(tf.tensor([1, 2, 4, 2]), 'B');
  // classifier.addExample(tf.tensor([1, 2, 4, 3]), 'B');
  // classifier.addExample(tf.tensor([1, 2, 4, 5]), 'B');
  // classifier.addExample(tf.tensor([1, 2, 4, 6]), 'B');
  // classifier.addExample(tf.tensor([1, 2, 4, 7]), 'B');
  // classifier.addExample(tf.tensor([1, 2, 4, 8]), 'B');

  // classifier.addExample(tf.tensor([1, 2, 5, 1]), 'C');
  // classifier.addExample(tf.tensor([1, 2, 5, 2]), 'C');
  // classifier.addExample(tf.tensor([1, 2, 5, 3]), 'C');
  // classifier.addExample(tf.tensor([1, 2, 5, 4]), 'C');
  // classifier.addExample(tf.tensor([1, 2, 5, 5]), 'C');
  // classifier.addExample(tf.tensor([1, 2, 5, 6]), 'C');
  // classifier.addExample(tf.tensor([1, 2, 5, 7]), 'C');
  // classifier.addExample(tf.tensor([1, 2, 5, 8]), 'C');

  if (classifier.getNumClasses() > 0) {
    const result = await classifier.predictClass(tf.tensor([1, 2, 3, 3]));
    console.log(result);
    const classes = ['A', 'B', 'C'];
    console.log(`prediction: ${result.label} probability: ${result.confidences[result.label]} `);
  }

};
TensforFlow_kknClassifier()
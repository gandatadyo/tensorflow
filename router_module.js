
const pitch_type = require('./pitch_type.js');

exports.Test_TensorFlow_Baseball = () => {
    console.log('Making prediction baseball -> start');
    async function Run() {
        let numTrainingIterations = 10;
        for (var i = 0; i < numTrainingIterations; i++) {
            console.log(`Training iteration : ${i + 1} / ${numTrainingIterations}`);
            await pitch_type.model.fitDataset(pitch_type.trainingData, { epochs: 1 });
            console.log('accuracyPerClass', await pitch_type.evaluate(true));
            await sleep(TIMEOUT_BETWEEN_EPOCHS_MS);
        }
        console.log('Making prediction baseball -> finish');
        // let data = await pitch_type.predictSample(sample)
    }
    Run();
}
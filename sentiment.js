// Imports the Google Cloud client library
const language = require('@google-cloud/language').v1beta2;

// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze
const text = 'Hello, world! This is a new way of trying to learn whats happening in people\'s writting!';

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the text
client
  .analyzeSentiment({document: document})
  .then(results => {
    const sentiment = results[0].documentSentiment;

    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
    console.log(sentiment);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
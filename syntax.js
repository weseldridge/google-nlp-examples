const language = require('@google-cloud/language').v1beta2;

const client = new language.LanguageServiceClient();

const text = 'Hello, world! This is a new way of trying to learn whats happening in people\'s writting!';

const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

client
    .analyzeSyntax({document: document})
    .then(results => {
      const syntax = results[0];

      console.log('Parts of speech:');
      syntax.tokens.forEach(part => {
        console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
        console.log(`Morphology:`, part.partOfSpeech);
      });
      console.log(syntax);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
const language = require('@google-cloud/language');


const client = new language.LanguageServiceClient();

const text = 'Hello, world! This is a new way of trying to learn whats happening in people\'s writting!';

const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

// Detects entities in the document
  client
    .analyzeEntities({document: document})
    .then(results => {
      const entities = results[0].entities;

      console.log('Entities:');
      entities.forEach(entity => {
        console.log(entity.name);
        console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
        if (entity.metadata && entity.metadata.wikipedia_url) {
          console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}$`);
        }
      });

      console.log(entities);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
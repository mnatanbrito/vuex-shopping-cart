/* eslint-disable no-console */
const jsf = require('json-schema-faker');
const chalk = require('chalk');
const Chance = require('chance');
const path = require('path');
const fs = require('fs');

const schema = require('./data/schema.json');

jsf.extend('chance', function() {
  return new Chance();
});

console.log(chalk.yellow('Generating fake data...'));
jsf
  .resolve(schema)
  .then(function(data) {
    fs.writeFile(
      path.resolve(path.join(__dirname, 'data/db.json')),
      JSON.stringify(data),
      {
        encoding: 'utf8'
      },
      function(err) {
        if (err) {
          console.log(chalk.red('Error generating the fake data! )= '));
        } else {
          console.log(chalk.green('Fake generated successfully!'));
        }
      }
    );
  })
  .catch(function() {
    console.log(chalk.red('Error generating the fake data! )='));
  });

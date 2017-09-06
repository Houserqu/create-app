var program = require('commander');
var createreact  = require('../lib/react/index');

program
  .version('0.0.1')
  .option('-react, --react [new]', 'new of customers in CSV file')
  .option('-vue, --vue [new]', 'new of customers in CSV file')
  .parse(process.argv)

if(program.react) createreact();
if(program.vue) console.log('vue');
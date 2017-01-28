var fs = require('fs');
    R = require('ramda');

function run(data) {
  const formatted = data.replace(/\n/g, '');
  

  for (var bit of formatted) {
    console.log(bit)
  }

}

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) { reject(err); }
  run(data);
});
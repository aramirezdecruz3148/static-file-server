const fs = require('fs');

function readFile(path, callback) {
  fs.readFile(path, { encoding: 'utf8' }, callback);
}

module.exports = {
  readFile
};

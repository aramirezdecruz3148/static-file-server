const { readFile } = require('../lib/read-file');

describe('read file function', () => {
  it('can read file in public directory', done => {
    readFile('./public/index.html', (err, content) => {
      expect(err).toBeFalsy();
      expect(content).toEqual(expect.any(String));
      done();
    });
  });
});

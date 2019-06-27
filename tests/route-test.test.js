const request = require('supertest');
const { app } = require('../lib/app');

describe('testing routes', () => {
  it('returns html file', () => {
    return request(app)
      .get('/index.html')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Pennington'));
      });
  });
});

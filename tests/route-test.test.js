const request = require('supertest');
const { app } = require('../lib/app');

describe('testing routes', () => {
  it('returns html file', () => {
    return request(app)
      .get('/index.html')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('Pennington'));
      });
  });

  it('returns Not Found for another pathname', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.status).toEqual(404);
        expect(res.text).toEqual(expect.stringContaining('Not Found'));
      });
  });
});

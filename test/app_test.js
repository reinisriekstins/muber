const
  { expect } = require('chai'),
  request = require('supertest'),
  app = require('../app')

describe('The express app', () => {
  it('handles a GET request to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        expect(response.body)
          .to.be.an('object')
          .with.property('hi')
          .which.equals('there')

        done()
      })
  })
})
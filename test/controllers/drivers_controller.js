const
  { expect } = require('chai'),
  request = require('supertest'),
  app = require('../../app')

describe('Drivers Controller', () => {
  it('Post to /api/drivers creates a new driver', (done) => {
    request(app)
      .post('/api/drivers')
      .send({ email: 'test@test.com' })
      .end(() => {


        done()
      })
  })
})
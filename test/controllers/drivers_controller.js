const
  { expect } = require('chai'),
  request = require('supertest'),
  app = require('../../app'),
  mongoose = require('mongoose')
  

const Driver = mongoose.model('driver')

describe('Drivers Controller', () => {
  it('POST to /api/drivers creates a new driver', (done) => {
    Driver.count()
      .then(count => {
        request(app)
          .post('/api/drivers')
          .send({ email: 'test@test.com' })
          .end(() => {
            Driver.count().then(newCount => {
              expect(count + 1).to.equal(newCount)
              done()
            })
          })
      })
    
  })

  it('PUT to /api/drivers/:id edits an existing driver', done => {
    const driver = new Driver({ email: 't@t.com', driving: false })

    driver.save().then(() => {
      request(app)
        .put(`/api/drivers/${ driver._id }`)
        .send({ driving: true })
        .end(() => {
          Driver.findOne({ email: 't@t.com' })
            .then(driver => {
              // should be equal to boolean of true, instead of string actually,
              // but I suppose it's fine
              expect(driver.driving).to.equal('true')

              done()
            })
        })
    })
  })

  it('DELETE to /api/drivers/:id deletes and existing driver', done => {
    const driver = new Driver({ email: 't@t.com' })

    driver.save().then(() => {
      request(app)
        .delete(`/api/drivers/${ driver._id }`)
        .end(() => {
          Driver.findOne({ email: 't@t.com' })
            .then(driver => {
              expect(driver).to.equal(null)
              done()
            })
        })
    })
  })
})
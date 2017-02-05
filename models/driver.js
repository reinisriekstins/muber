const
  mongoose = require('mongoose'),
  { Schema } = mongoose,

const DriverSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: String,
    default: false
  },
  // location:
})

const Driver = mongoose.model('driver', DriverSchema)

module.exports = Driver
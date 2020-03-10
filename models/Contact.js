const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  propertyName: {
    type: String,
    required: true
  },
  tenant: {
    type: String
  },
  rent: {
    type: String
  },
  stage: {
    type: String,
    default: 'vacant'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contact', ContactSchema);

const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [ true, 'Please add name.'],
    },
    last_name: {
      type: String,
      required: [ true, 'Please add name.'],
    },
    email: {
      type: String,
      required: [ true, 'Please add Email.'],
    },
    password: {
      type: String,
      required: [ true, 'Please add password.'],
    },
    // avatar: {
    //   type:
    // }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)
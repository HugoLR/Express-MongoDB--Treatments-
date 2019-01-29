const mongoose = require ('mongoose')
const { Schema }  = mongoose

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type:String,
    required: true
  },
  email: {
    type:String,
    unique: true
  }
})

module.exports = mongoose.model('User', userShema)

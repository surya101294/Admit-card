const mongoose = require('mongoose')

const AdmitcardSchema = mongoose.Schema({
  name: { type: String },
  phone: { type: Number },
  school: { type: String },
  class: { type: String },
  rollNumber: { type: Number },
  address: { type: String }
},
  { versionKey: false }

)

const AdmitcardModel = mongoose.model("Admitcard", AdmitcardSchema)
module.exports = { AdmitcardModel }
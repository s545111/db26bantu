const mongoose = require("mongoose")
const guitarSchema = mongoose.Schema({
GBrand: String,
Gcolor: String,
GCost: Number
})
module.exports = mongoose.model("Guitar",guitarSchema)
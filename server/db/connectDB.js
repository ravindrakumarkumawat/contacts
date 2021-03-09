require("dotenv").config()
const mongoose = require("mongoose")

const URI = "mongodb+srv://contacts:wAtSgGPb2N4Z2eyB@cluster0.tnxf2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    console.log("MongoDB is ready")
  } catch (err) {
    console.error(err)
  }
}

module.exports = { connectDB }

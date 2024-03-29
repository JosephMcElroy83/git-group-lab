import mongoose from 'mongoose'

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  'mongodb://127.0.0.1:27017/postsAppDatabase'

mongoose.set('returnOriginal', false)

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) => console.error('Error connecting to MongoDB: ', error.message))

mongoose.connection.on('disconnected', () => console.log('Disconnected from MongoDB!'))

mongoose.connection.on('error', (error) => console.error(`MongoDB connection error: ${error}`))

export default mongoose.connection
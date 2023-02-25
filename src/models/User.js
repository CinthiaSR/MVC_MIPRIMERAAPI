import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
}, { 
  timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User

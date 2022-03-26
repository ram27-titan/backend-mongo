import mongoose from 'mongoose';

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('Users', User);

import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: { Type: String, required: true },
  description: String
});

export default mongoose.model("Background", schema);
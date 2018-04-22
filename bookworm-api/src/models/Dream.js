import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: String },
  image: { type: String },
  dreamId: { type: Number, required: true },
  timestamp: { type: Date, required: true },
  
});

export default mongoose.model("Dream", schema);
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: { Type: String, required: true },
  description: String,
  traits: [
    {
      name: { Type: String, required: true },
      description: String
    }
  ],
  subraces: [
    {
      name: { Type: String, required: true },
      description: String,
      traits: [
        {
          name: { Type: String, required: true },
          description: String,
        }
      ]
    }
  ]
});

export default mongoose.model("Race", schema);
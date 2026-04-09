import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  status: { type: String, default: "open" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comments: [
    {
      text: String,
      user: String
    }
  ]
});

export default mongoose.model("Task", taskSchema);
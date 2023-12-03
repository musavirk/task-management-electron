import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  type: {
    type: String,
    enum: ['Urgent and Important', 'Not Urgent but Important', 'Urgent but Not Important'],
  },
  heading: { type: String, required: true },
  status: { type: String, required: true, enum: ['ToDo', 'InProgress', 'Done'] },
});

export default mongoose.model('Task', taskSchema);

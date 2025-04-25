import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  intro:{type:String,required: true},
  description: { type: String, required: true },
  collaborators:[String],
  techStack: [String],
  images: [String],
  githubLink: String,
  liveDemoLink: String,
  tags: [String],
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;

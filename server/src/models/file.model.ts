import mongoose from 'mongoose';
import { InterfaceData } from '../interfaces/dataInterface';

const FileSchema = new mongoose.Schema<InterfaceData>({
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  favorite_sport: { type: String, required: true },
});

export default mongoose.models.File || mongoose.model('File', FileSchema);

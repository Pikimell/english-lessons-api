import { model, Schema } from 'mongoose';
const webinarSchema = new Schema(
  {
    date: { type: Date, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
    participants: { type: Array, default: [] },
  },
  {
    versionKey: false,
  },
);

export const WebinarCollection = model('webinars', webinarSchema);

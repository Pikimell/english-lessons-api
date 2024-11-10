import { model, Schema } from 'mongoose';
const testSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

export const TestCollection = model('tests', testSchema);

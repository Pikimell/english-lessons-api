import { model, Schema } from 'mongoose';
const studentSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
    },
    userName: {
      type: String,
    },
    displayName: {
      type: String,
    },
    loyaltyPoints: {
      type: Number,
      default: 0,
    },
    level: {
      type: String,
      default: 'A0',
    },
    dob: {
      type: Date,
      required: true,
    },
    registrationDate: {
      type: Date,
      default: Date.now,
    },
    lastActivity: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

export const StudentCollection = model('students', studentSchema);

import { model, Schema } from 'mongoose';
const appointmentSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'students',
      required: true,
    },
    notes: { type: String },
    pricePerHour: { type: Number, required: true },
    duration: { type: Number, required: true },
  },
  {
    versionKey: false,
  },
);

export const AppointmentCollection = model('appointments', appointmentSchema);

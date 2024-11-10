import { model, Schema } from 'mongoose';
const scheduleSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    classType: {
      type: String,
      required: true,
    },
    days: {
      type: Array,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

export const ScheduleCollection = model('schedules', scheduleSchema);

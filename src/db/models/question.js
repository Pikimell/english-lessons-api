import { model, Schema } from 'mongoose';
const questionSchema = new Schema(
  {
    testId: {
      type: Schema.Types.ObjectId,
      ref: 'tests',
      required: true,
    },
    question: {
      type: String,
      required: true,
      unique: true,
    },
    answers: {
      type: [String],
      required: true,
    },
    correctAnswer: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

export const QuestionCollection = model('questions', questionSchema);

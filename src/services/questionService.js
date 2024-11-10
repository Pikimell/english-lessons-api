import { QuestionCollection } from '../db/models/question.js';
import createHttpError from 'http-errors';

export const createQuestion = async (questionData) => {
  try {
    const question = new QuestionCollection(questionData);
    await question.save();
    return question;
  } catch (error) {
    throw createHttpError(400, `Не вдалося створити питання: ${error.message}`);
  }
};

export const getQuestionById = async (id) => {
  try {
    const question = await QuestionCollection.findById(id);
    if (!question) {
      throw createHttpError(404, `Питання з ID ${id} не знайдено`);
    }
    return question;
  } catch (error) {
    throw createHttpError(400, `Не вдалося отримати питання: ${error.message}`);
  }
};

export const updateQuestion = async (id, updateData) => {
  try {
    const question = await QuestionCollection.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!question) {
      throw createHttpError(404, `Питання з ID ${id} не знайдено`);
    }
    return question;
  } catch (error) {
    throw createHttpError(400, `Не вдалося оновити питання: ${error.message}`);
  }
};

export const deleteQuestion = async (id) => {
  try {
    const question = await QuestionCollection.findByIdAndDelete(id);
    if (!question) {
      throw createHttpError(404, `Питання з ID ${id} не знайдено`);
    }
    return question;
  } catch (error) {
    throw createHttpError(400, `Не вдалося видалити питання: ${error.message}`);
  }
};

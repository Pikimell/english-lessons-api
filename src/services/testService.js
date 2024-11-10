import { TestCollection } from '../db/models/test.js';
import createHttpError from 'http-errors';

export const createTest = async (testData) => {
  try {
    const test = new TestCollection(testData);
    await test.save();
    return test;
  } catch (error) {
    throw createHttpError(400, `Не вдалося створити тест: ${error.message}`);
  }
};

export const getTestById = async (id) => {
  try {
    const test = await TestCollection.findById(id);
    if (!test) {
      throw createHttpError(404, `Тест з ID ${id} не знайдено`);
    }
    return test;
  } catch (error) {
    throw createHttpError(400, `Не вдалося отримати тест: ${error.message}`);
  }
};

export const updateTest = async (id, updateData) => {
  try {
    const test = await TestCollection.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!test) {
      throw createHttpError(404, `Тест з ID ${id} не знайдено`);
    }
    return test;
  } catch (error) {
    throw createHttpError(400, `Не вдалося оновити тест: ${error.message}`);
  }
};

export const deleteTest = async (id) => {
  try {
    const test = await TestCollection.findByIdAndDelete(id);
    if (!test) {
      throw createHttpError(404, `Тест з ID ${id} не знайдено`);
    }
    return test;
  } catch (error) {
    throw createHttpError(400, `Не вдалося видалити тест: ${error.message}`);
  }
};

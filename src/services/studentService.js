import { StudentCollection } from '../db/models/student.js';
import createHttpError from 'http-errors';

export const createStudent = async (studentData) => {
  try {
    const student = new StudentCollection(studentData);
    await student.save();
    return student;
  } catch (error) {
    throw createHttpError(
      400,
      `Не вдалося створити студента: ${error.message}`,
    );
  }
};

export const getStudentById = async (id) => {
  try {
    const student = await StudentCollection.findById(id);
    if (!student) {
      throw createHttpError(404, `Студента з ID ${id} не знайдено`);
    }
    return student;
  } catch (error) {
    throw createHttpError(
      400,
      `Не вдалося отримати студента: ${error.message}`,
    );
  }
};
export const getStudents = async (filters) => {
  try {
    const students = await StudentCollection.find(filters);
    return students;
  } catch (error) {
    throw createHttpError(
      400,
      `Не вдалося отримати студентів: ${error.message}`,
    );
  }
};

export const updateStudent = async (id, updateData) => {
  try {
    const student = await StudentCollection.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!student) {
      throw createHttpError(404, `Студента з ID ${id} не знайдено`);
    }
    return student;
  } catch (error) {
    throw createHttpError(400, `Не вдалося оновити студента: ${error.message}`);
  }
};

export const deleteStudent = async (id) => {
  try {
    const student = await StudentCollection.findByIdAndDelete(id);
    if (!student) {
      throw createHttpError(404, `Студента з ID ${id} не знайдено`);
    }
    return student;
  } catch (error) {
    throw createHttpError(
      400,
      `Не вдалося видалити студента: ${error.message}`,
    );
  }
};

export const getAllStudents = async () => {
  try {
    const students = await StudentCollection.find();
    return students;
  } catch (error) {
    throw createHttpError(
      400,
      `Не вдалося отримати список студентів: ${error.message}`,
    );
  }
};

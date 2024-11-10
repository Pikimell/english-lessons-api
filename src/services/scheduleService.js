import { ScheduleCollection } from '../db/models/schedule.js';
import createHttpError from 'http-errors';

export const createSchedule = async (scheduleData) => {
  try {
    const schedule = new ScheduleCollection(scheduleData);
    await schedule.save();
    return schedule;
  } catch (error) {
    throw createHttpError(400, `Не вдалося створити розклад: ${error.message}`);
  }
};

export const getScheduleById = async (id) => {
  try {
    const schedule = await ScheduleCollection.findById(id);
    if (!schedule) {
      throw createHttpError(404, `Розклад з ID ${id} не знайдено`);
    }
    return schedule;
  } catch (error) {
    throw createHttpError(400, `Не вдалося отримати розклад: ${error.message}`);
  }
};

export const getSchedules = async (filters) => {
  try {
    const schedules = await ScheduleCollection.find(filters);
    return schedule;
  } catch (error) {
    throw createHttpError(400, `Не вдалося отримати розклад: ${error.message}`);
  }
};

export const updateSchedule = async (id, updateData) => {
  try {
    const schedule = await ScheduleCollection.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!schedule) {
      throw createHttpError(404, `Розклад з ID ${id} не знайдено`);
    }
    return schedule;
  } catch (error) {
    throw createHttpError(400, `Не вдалося оновити розклад: ${error.message}`);
  }
};

export const deleteSchedule = async (id) => {
  try {
    const schedule = await ScheduleCollection.findByIdAndDelete(id);
    if (!schedule) {
      throw createHttpError(404, `Розклад з ID ${id} не знайдено`);
    }
    return schedule;
  } catch (error) {
    throw createHttpError(400, `Не вдалося видалити розклад: ${error.message}`);
  }
};

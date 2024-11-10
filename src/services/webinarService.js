import { WebinarCollection } from '../db/models/webinar.js';
import createHttpError from 'http-errors';

export const createWebinar = async (webinarData) => {
  try {
    const webinar = new WebinarCollection(webinarData);
    await webinar.save();
    return webinar;
  } catch (error) {
    throw createHttpError(400, `Не вдалося створити вебінар: ${error.message}`);
  }
};

export const getWebinarById = async (id) => {
  try {
    const webinar = await WebinarCollection.findById(id);
    if (!webinar) {
      throw createHttpError(404, `Вебінар з ID ${id} не знайдено`);
    }
    return webinar;
  } catch (error) {
    throw createHttpError(400, `Не вдалося отримати вебінар: ${error.message}`);
  }
};

export const getWebinars = async (filters) => {
  try {
    const webinarList = await WebinarCollection.find(filters);
    return webinarList;
  } catch (error) {
    throw createHttpError(
      400,
      `Не вдалося отримати список вебінарів: ${error.message}`,
    );
  }
};

export const updateWebinar = async (id, updateData) => {
  try {
    const webinar = await WebinarCollection.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!webinar) {
      throw createHttpError(404, `Вебінар з ID ${id} не знайдено`);
    }
    return webinar;
  } catch (error) {
    throw createHttpError(400, `Не вдалося оновити вебінар: ${error.message}`);
  }
};

export const deleteWebinar = async (id) => {
  try {
    const webinar = await WebinarCollection.findByIdAndDelete(id);
    if (!webinar) {
      throw createHttpError(404, `Вебінар з ID ${id} не знайдено`);
    }
    return webinar;
  } catch (error) {
    throw createHttpError(400, `Не вдалося видалити вебінар: ${error.message}`);
  }
};

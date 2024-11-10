import { AppointmentCollection } from '../db/models/appointment.js';
import createHttpError from 'http-errors';

export const createAppointment = async (appointmentData) => {
  try {
    const appointment = new AppointmentCollection(appointmentData);
    await appointment.save();
    return appointment;
  } catch (error) {
    throw createHttpError(400, `Не вдалося створити запис: ${error.message}`);
  }
};

export const getAppointmentById = async (id) => {
  try {
    const appointment = await AppointmentCollection.findById(id);
    if (!appointment) {
      throw createHttpError(404, `Запис з ID ${id} не знайдено`);
    }
    return appointment;
  } catch (error) {
    throw createHttpError(400, `Не вдалося отримати запис: ${error.message}`);
  }
};
export const getAppointments = async (filters) => {
  try {
    const appointments = await AppointmentCollection.find(filters);
    return appointments;
  } catch (error) {
    throw createHttpError(400, `Не вдалося отримати записи: ${error.message}`);
  }
};

export const updateAppointment = async (id, updateData) => {
  try {
    const appointment = await AppointmentCollection.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!appointment) {
      throw createHttpError(404, `Запис з ID ${id} не знайдено`);
    }
    return appointment;
  } catch (error) {
    throw createHttpError(400, `Не вдалося оновити запис: ${error.message}`);
  }
};

export const deleteAppointment = async (id) => {
  try {
    const appointment = await AppointmentCollection.findByIdAndDelete(id);
    if (!appointment) {
      throw createHttpError(404, `Запис з ID ${id} не знайдено`);
    }
    return appointment;
  } catch (error) {
    throw createHttpError(400, `Не вдалося видалити запис: ${error.message}`);
  }
};

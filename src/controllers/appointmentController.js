import { response } from '../helpers/response.js';
import {
  createAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from '../services/appointmentService.js';

export const createAppointmentController = async (event, context) => {
  const appointmentData = event.body;
  const appointment = await createAppointment(appointmentData);
  return response(201)(appointment);
};

export const getAppointmentController = async (event, context) => {
  const { id } = event.pathParameters;
  const appointment = await getAppointmentById(id);
  return response(200)(appointment);
};

export const updateAppointmentController = async (event, context) => {
  const { id } = event.pathParameters;
  const updateData = event.body;
  const appointment = await updateAppointment(id, updateData);
  return response(200)(appointment);
};

export const deleteAppointmentController = async (event, context) => {
  const { id } = event.pathParameters;
  const appointment = await deleteAppointment(id);
  return response(200)(appointment);
};

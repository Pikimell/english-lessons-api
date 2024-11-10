import { response } from '../helpers/response.js';
import {
  createAppointment,
  getAppointmentById,
  getAppointments,
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
export const getAppointmentsController = async (event, context) => {
  const filters = event.queryStringParameters || undefined;
  const appointment = await getAppointments(filters);
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

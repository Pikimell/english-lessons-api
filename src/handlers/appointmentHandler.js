import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createAppointmentController,
  getAppointmentController,
  getAppointmentsController,
  updateAppointmentController,
  deleteAppointmentController,
} from '../controllers/appointmentController.js';

export const createAppointmentHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createAppointmentController);
  return await ctrl(event, context);
};

export const getAppointmentHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getAppointmentController);
  return await ctrl(event, context);
};
export const getAppointmentsHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getAppointmentsController);
  return await ctrl(event, context);
};

export const updateAppointmentHandler = async (event, context) => {
  const ctrl = ctrlWrapper(updateAppointmentController);
  return await ctrl(event, context);
};

export const deleteAppointmentHandler = async (event, context) => {
  const ctrl = ctrlWrapper(deleteAppointmentController);
  return await ctrl(event, context);
};

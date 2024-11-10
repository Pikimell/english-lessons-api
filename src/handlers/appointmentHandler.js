import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import {
  createAppointmentController,
  getAppointmentController,
  updateAppointmentController,
  deleteAppointmentController,
} from '../../controllers/appointmentController.js';

export const createAppointmentHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createAppointmentController);
  return await ctrl(event, context);
};

export const getAppointmentHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getAppointmentController);
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

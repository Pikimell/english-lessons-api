import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createScheduleController,
  getScheduleController,
  updateScheduleController,
  deleteScheduleController,
} from '../controllers/scheduleController.js';

export const createScheduleHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createScheduleController);
  return await ctrl(event, context);
};

export const getScheduleHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getScheduleController);
  return await ctrl(event, context);
};

export const updateScheduleHandler = async (event, context) => {
  const ctrl = ctrlWrapper(updateScheduleController);
  return await ctrl(event, context);
};

export const deleteScheduleHandler = async (event, context) => {
  const ctrl = ctrlWrapper(deleteScheduleController);
  return await ctrl(event, context);
};

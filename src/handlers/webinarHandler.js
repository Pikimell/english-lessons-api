import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createWebinarController,
  getWebinarController,
  updateWebinarController,
  deleteWebinarController,
} from '../controllers/webinarController.js';

export const createWebinarHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createWebinarController);
  return await ctrl(event, context);
};

export const getWebinarHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getWebinarController);
  return await ctrl(event, context);
};

export const updateWebinarHandler = async (event, context) => {
  const ctrl = ctrlWrapper(updateWebinarController);
  return await ctrl(event, context);
};

export const deleteWebinarHandler = async (event, context) => {
  const ctrl = ctrlWrapper(deleteWebinarController);
  return await ctrl(event, context);
};

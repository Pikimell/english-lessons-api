import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createTestController,
  getTestController,
  getTestsController,
  updateTestController,
  deleteTestController,
} from '../controllers/testController.js';

export const createTestHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createTestController);
  return await ctrl(event, context);
};

export const getTestHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getTestController);
  return await ctrl(event, context);
};
export const getTestsHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getTestsController);
  return await ctrl(event, context);
};

export const updateTestHandler = async (event, context) => {
  const ctrl = ctrlWrapper(updateTestController);
  return await ctrl(event, context);
};

export const deleteTestHandler = async (event, context) => {
  const ctrl = ctrlWrapper(deleteTestController);
  return await ctrl(event, context);
};

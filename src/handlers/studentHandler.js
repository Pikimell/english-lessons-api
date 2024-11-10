import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import {
  createStudentController,
  getStudentController,
  updateStudentController,
  deleteStudentController,
} from '../../controllers/studentController.js';

export const createStudentHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createStudentController);
  return await ctrl(event, context);
};

export const getStudentHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getStudentController);
  return await ctrl(event, context);
};

export const updateStudentHandler = async (event, context) => {
  const ctrl = ctrlWrapper(updateStudentController);
  return await ctrl(event, context);
};

export const deleteStudentHandler = async (event, context) => {
  const ctrl = ctrlWrapper(deleteStudentController);
  return await ctrl(event, context);
};

import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import {
  createQuestionController,
  getQuestionController,
  updateQuestionController,
  deleteQuestionController,
} from '../../controllers/questionController.js';

export const createQuestionHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createQuestionController);
  return await ctrl(event, context);
};

export const getQuestionHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getQuestionController);
  return await ctrl(event, context);
};

export const updateQuestionHandler = async (event, context) => {
  const ctrl = ctrlWrapper(updateQuestionController);
  return await ctrl(event, context);
};

export const deleteQuestionHandler = async (event, context) => {
  const ctrl = ctrlWrapper(deleteQuestionController);
  return await ctrl(event, context);
};

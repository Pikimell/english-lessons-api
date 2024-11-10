import { response } from '../helpers/response.js';
import {
  createQuestion,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
} from '../services/questionService.js';

export const createQuestionController = async (event, context) => {
  const questionData = event.body;
  const question = await createQuestion(questionData);
  return response(201)(question);
};

export const getQuestionController = async (event, context) => {
  const { id } = event.pathParameters;
  const question = await getQuestionById(id);
  return response(200)(question);
};

export const updateQuestionController = async (event, context) => {
  const { id } = event.pathParameters;
  const updateData = event.body;
  const question = await updateQuestion(id, updateData);
  return response(200)(question);
};

export const deleteQuestionController = async (event, context) => {
  const { id } = event.pathParameters;
  const question = await deleteQuestion(id);
  return response(200)(question);
};

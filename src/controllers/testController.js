import { response } from '../helpers/response.js';
import {
  createTest,
  getTestById,
  updateTest,
  deleteTest,
} from '../services/testService.js';

export const createTestController = async (event, context) => {
  const testData = event.body;
  const test = await createTest(testData);
  return response(201)(test);
};

export const getTestController = async (event, context) => {
  const { id } = event.pathParameters;
  const test = await getTestById(id);
  return response(200)(test);
};

export const updateTestController = async (event, context) => {
  const { id } = event.pathParameters;
  const updateData = event.body;
  const test = await updateTest(id, updateData);
  return response(200)(test);
};

export const deleteTestController = async (event, context) => {
  const { id } = event.pathParameters;
  const test = await deleteTest(id);
  return response(200)(test);
};

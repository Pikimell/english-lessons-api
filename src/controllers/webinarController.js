import { response } from '../helpers/response.js';
import {
  createWebinar,
  getWebinarById,
  updateWebinar,
  deleteWebinar,
} from '../services/webinarService.js';

export const createWebinarController = async (event, context) => {
  const webinarData = event.body;
  const webinar = await createWebinar(webinarData);
  return response(201)(webinar);
};

export const getWebinarController = async (event, context) => {
  const { id } = event.pathParameters;
  const webinar = await getWebinarById(id);
  return response(200)(webinar);
};

export const updateWebinarController = async (event, context) => {
  const { id } = event.pathParameters;
  const updateData = event.body;
  const webinar = await updateWebinar(id, updateData);
  return response(200)(webinar);
};

export const deleteWebinarController = async (event, context) => {
  const { id } = event.pathParameters;
  const webinar = await deleteWebinar(id);
  return response(200)(webinar);
};

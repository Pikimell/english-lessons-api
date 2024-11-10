import { response } from '../helpers/response.js';
import {
  createSchedule,
  getScheduleById,
  getSchedules,
  updateSchedule,
  deleteSchedule,
} from '../services/scheduleService.js';

export const createScheduleController = async (event, context) => {
  const scheduleData = event.body;
  const schedule = await createSchedule(scheduleData);
  return response(201)(schedule);
};

export const getScheduleController = async (event, context) => {
  const { id } = event.pathParameters;
  const schedule = await getScheduleById(id);
  return response(200)(schedule);
};
export const getSchedulesController = async (event, context) => {
  const filters = event.queryStringParameters || undefined;
  const schedule = await getSchedules(filters);
  return response(200)(schedule);
};

export const updateScheduleController = async (event, context) => {
  const { id } = event.pathParameters;
  const updateData = event.body;
  const schedule = await updateSchedule(id, updateData);
  return response(200)(schedule);
};

export const deleteScheduleController = async (event, context) => {
  const { id } = event.pathParameters;
  const schedule = await deleteSchedule(id);
  return response(200)(schedule);
};

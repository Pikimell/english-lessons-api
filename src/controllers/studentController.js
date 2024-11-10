import { response } from '../helpers/response.js';
import {
  createStudent,
  getStudentById,
  getStudents,
  updateStudent,
  deleteStudent,
} from '../services/studentService.js';

export const createStudentController = async (event, context) => {
  const studentData = event.body;
  const student = await createStudent(studentData);
  return response(201)(student);
};

export const getStudentController = async (event, context) => {
  const { id } = event.pathParameters;
  const student = await getStudentById(id);
  return response(200)(student);
};
export const getStudentsController = async (event, context) => {
  const filters = event.queryStringParameters || undefined;
  const student = await getStudents(filters);
  return response(200)(student);
};

export const updateStudentController = async (event, context) => {
  const { id } = event.pathParameters;
  const updateData = event.body;
  const student = await updateStudent(id, updateData);
  return response(200)(student);
};

export const deleteStudentController = async (event, context) => {
  const { id } = event.pathParameters;
  const student = await deleteStudent(id);
  return response(200)(student);
};

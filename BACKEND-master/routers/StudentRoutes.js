import * as StudentController from '../controllers/StudentController.js';
import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudent);
//studentRoutes.post('/add student', StudentController.addStudent);

export default studentRoutes;
import * as StudentController from '../controllers/StudentController.js';
import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudent);
studentRoutes.post('/new', StudentController.createStudent);
studentRoutes.delete('/delete/:studentId', StudentController.deleteStudent);
studentRoutes.put('/edit/:StudentId', StudentController.editStudent);

export default studentRoutes;
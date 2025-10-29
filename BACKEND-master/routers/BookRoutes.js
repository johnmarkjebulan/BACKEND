import * as BookController from '../controllers/BookController.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.get('/all', BookController.fetchBooks);
//bookRoutes.post('/add book', BookController.addBook);

export default bookRoutes;
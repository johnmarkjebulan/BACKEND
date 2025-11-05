import * as BookController from '../controllers/BookController.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.get('/all', BookController.fetchBooks);
bookRoutes.post('/new', BookController.createBook);
bookRoutes.delete('/delete/:bookId', BookController.deleteBook);
bookRoutes.put('/edit/:bookId', BookController.editBook);

export default bookRoutes;


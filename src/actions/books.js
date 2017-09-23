import api from '../api';

export const searchBook = (query) => api.books.search(query)
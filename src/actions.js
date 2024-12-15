import { ADD_BOOK, REMOVE_BOOK } from './boilerplate';

export const handleBook = (newBook) => {
    if (newBook.title && newBook.author && newBook.genre) {
        return {
            type: ADD_BOOK,
            payload: newBook,
        };
    }
    return null;
};

export const handleDelete = (index) => {
    return {
        type: REMOVE_BOOK,
        payload: index,
    };
};

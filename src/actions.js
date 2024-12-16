export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';


export const handleBook = (newBook) => {
    if (newBook.title && newBook.author && newBook.genre) {
        return {
            type: ADD_BOOK,
            payload: newBook,
        };
    }
    return null;
};


export const handleDelete = (id) => {
    return {
        type: REMOVE_BOOK,
        payload: id,
    };
};

import { ADD_BOOK, REMOVE_BOOK } from './boilerplate';

export const bookReducer = (state, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, action.payload];
        case REMOVE_BOOK:
            return state.filter((_, i) => i !== action.payload);
        default:
            return state;
    }
};

import { FILTER_BY_AUTHOR, FILTER_BY_CATEGORY } from './actionType';

export const filterByCategory = (category) => ({
    type: FILTER_BY_CATEGORY,
    payload: category,
});

export const filterByAuthor = (author) => ({
    type: FILTER_BY_AUTHOR,
    payload: author,
});

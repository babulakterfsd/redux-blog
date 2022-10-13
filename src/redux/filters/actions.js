import { FILTER_BY_AUTHOR, FILTER_BY_CATEGORY, FILTER_BY_SEARCH } from './actionType';

export const filterByCategory = (category) => ({
    type: FILTER_BY_CATEGORY,
    payload: category,
});

export const filterByAuthor = (author) => ({
    type: FILTER_BY_AUTHOR,
    payload: author,
});

export const filterBySearch = (search) => ({
    type: FILTER_BY_SEARCH,
    payload: search,
});

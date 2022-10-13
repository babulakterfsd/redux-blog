import { FILTER_BY_AUTHOR, FILTER_BY_CATEGORY } from './actionType';

const initialState = {
    category: 'all',
    author: 'all',
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                category: action.payload,
            };
        case FILTER_BY_AUTHOR:
            return {
                ...state,
                author: action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;

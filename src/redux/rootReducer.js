import { combineReducers } from 'redux';
import blogReducer from './blogs/blogReducer';
import filterReducer from './filters/filterReducer';

const rootReducer = combineReducers({
    blogs: blogReducer,
    filters: filterReducer,
});

export default rootReducer;

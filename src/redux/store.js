import { applyMiddleware, createStore } from 'redux';
import myLogger from './middlewares/myLogger';
import rootReducer from './rootReducer';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)));
const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;

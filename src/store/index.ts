import {
    createStore, combineReducers
} from 'redux';

import { CategoryReducer } from "Store/Category";

export const reducers = {
    CategoryReducer
};

const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

export default store;

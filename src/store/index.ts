import {
    createStore, combineReducers
} from 'redux';

import { CategoryReducer } from 'Store/Category';
import { BrandReducer } from 'Store/Brand';
import { ProductsReducer } from 'Store/Products';
import { NestedCategoryReducer } from 'Store/NestedCategory';

export const reducers = {
    CategoryReducer,
    BrandReducer,
    ProductsReducer,
    NestedCategoryReducer
};

const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

export default store;

import { UPDATE_CATEGORY_LIST } from './Category.action';

import {
    CategoryDataItemListType
} from 'Type/ResponseData.type';

export const initialState = {};

const CategoryReducer: (
    state: CategoryDataItemListType,
    categoryAction: {
        type: string,
        categories: CategoryDataItemListType
    }
) => CategoryDataItemListType = (state = initialState, { type, categories }) => {
    switch (type) {
        case UPDATE_CATEGORY_LIST:
            return {
                ...state,
                ...categories
            };
        default:
            return state;
    }
};

export default CategoryReducer;
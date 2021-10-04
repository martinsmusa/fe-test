import { UPDATE_NESTED_CATEGORY_LIST } from './NestedCategory.action';

import {
    CategoryDataItemListType, FullCategoryTypeListType
} from 'Type/ResponseData.type';

export const initialState = {};

const NestedCategoryReducer: (
    state: FullCategoryTypeListType,
    categoryAction: {
        type: string,
        categories: FullCategoryTypeListType
    }
) => CategoryDataItemListType = (state = initialState, { type, categories }) => {
    switch (type) {
        case UPDATE_NESTED_CATEGORY_LIST:
            return {
                ...state,
                ...categories
            };
        default:
            return state;
    }
};

export default NestedCategoryReducer;
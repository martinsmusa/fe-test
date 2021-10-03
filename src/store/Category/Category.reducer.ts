import { UPDATE_CATEGORY_LIST } from './Category.action';

import {
    DataItemListType
} from 'Type/ResponseData.type';

export const initialState = {};

const CategoryReducer: (
    state: DataItemListType,
    categoryAction: {
        type: string,
        categories: DataItemListType
    }
) => DataItemListType = (state = initialState, { type, categories }) => {
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
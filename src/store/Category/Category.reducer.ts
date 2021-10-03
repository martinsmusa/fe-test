import { UPDATE_CATEGORY_LIST } from './Category.action';

import {
    CategoryType, CategoryListType
} from "Type/Category.type";

export const initialState = {};

const CategoryReducer: (
    state: CategoryListType,
    categoryAction: {
        type: string,
        categories: CategoryType[]
    }
) => CategoryListType = (state = initialState, { type, categories }) => {
        switch (type) {
            case UPDATE_CATEGORY_LIST:
                const indexedList: CategoryListType = categories.reduce((acc, cat) => {
                    return {
                        ...acc,
                        [cat.id]: cat
                    }
                }, state);

                return indexedList;
            default:
                return state;
        }
    };

export default CategoryReducer;
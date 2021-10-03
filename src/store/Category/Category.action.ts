import { CategoryType } from "Type/Category.type";

export const UPDATE_CATEGORY_LIST = 'UPDATE_CATEGORY_LIST';

export const updateCategoryList: (categories: CategoryType[]) => {
    type: string,
    categories: CategoryType[]
} = categories => ({
    type: UPDATE_CATEGORY_LIST,
    categories
});

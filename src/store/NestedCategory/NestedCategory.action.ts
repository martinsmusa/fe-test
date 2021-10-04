import { FullCategoryTypeListType } from 'Type/ResponseData.type';

export const UPDATE_NESTED_CATEGORY_LIST = 'UPDATE_NESTED_CATEGORY_LIST';

export const updateNestedCategoryList: (categories: FullCategoryTypeListType) => {
    type: string,
    categories: any
} = categories => ({
    type: UPDATE_NESTED_CATEGORY_LIST,
    categories
});

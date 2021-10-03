import { CategoryDataItemListType } from 'Type/ResponseData.type';

export const UPDATE_CATEGORY_LIST = 'UPDATE_CATEGORY_LIST';

export const updateCategoryList: (categories: CategoryDataItemListType) => {
    type: string,
    categories: CategoryDataItemListType
} = categories => ({
    type: UPDATE_CATEGORY_LIST,
    categories
});

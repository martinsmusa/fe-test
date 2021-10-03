import { DataItemListType } from 'Type/ResponseData.type';

export const UPDATE_CATEGORY_LIST = 'UPDATE_CATEGORY_LIST';

export const updateCategoryList: (categories: DataItemListType) => {
    type: string,
    categories: DataItemListType
} = categories => ({
    type: UPDATE_CATEGORY_LIST,
    categories
});

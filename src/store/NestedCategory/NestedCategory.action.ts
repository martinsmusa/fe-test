import { FullBrandType, FullCategoryTypeListType, PathType } from 'Type/ResponseData.type';

export const UPDATE_NESTED_CATEGORY_LIST = 'UPDATE_NESTED_CATEGORY_LIST';
export const DELETE_NESTED_ITEM = 'DELETE_NESTED_ITEM';
export const ADD_BRAND = 'ADD_BRAND';

export const updateNestedCategoryList: (categories: FullCategoryTypeListType) => {
    type: string,
    categories: FullCategoryTypeListType
} = categories => ({
    type: UPDATE_NESTED_CATEGORY_LIST,
    categories
});

export const deleteItem: (path: PathType) => {
    type: string,
    path: PathType
} = path => ({
    type: DELETE_NESTED_ITEM,
    path
});

export const addBrand: (brand: FullBrandType, path: PathType) => {
    type: string,
    brand: FullBrandType
    path: PathType
} = (brand, path) => ({
    type: ADD_BRAND,
    path,
    brand
});

import { DataItemListType } from 'Type/ResponseData.type';

export const UPDATE_PRODUCT_LIST = 'UPDATE_PRODUCT_LIST';

export const updateProductList: (brands: DataItemListType) => {
    type: string,
    products: DataItemListType
} = products => ({
    type: UPDATE_PRODUCT_LIST,
    products
});

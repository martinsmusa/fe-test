import { DataItemListType } from 'Type/ResponseData.type';

export const UPDATE_BRAND_LIST = 'UPDATE_BRAND_LIST';

export const updateBrandList: (brands: DataItemListType) => {
    type: string,
    brands: DataItemListType
} = brands => ({
    type: UPDATE_BRAND_LIST,
    brands
});

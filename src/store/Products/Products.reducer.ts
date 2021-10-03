import { UPDATE_PRODUCT_LIST } from './Products.action';

import {
    DataItemListType
} from 'Type/ResponseData.type';

export const initialState = {};

const ProductsReducer: (
    state: DataItemListType,
    ProductAction: {
        type: string,
        products: DataItemListType
    }
) => DataItemListType = (state = initialState, { type, products }) => {
    switch (type) {
        case UPDATE_PRODUCT_LIST:
            return {
                ...state,
                ...products
            };
        default:
            return state;
    }
};

export default ProductsReducer;
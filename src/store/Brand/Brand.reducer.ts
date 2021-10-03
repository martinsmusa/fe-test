import { UPDATE_BRAND_LIST } from './Brand.action';

import {
    DataItemListType
} from 'Type/ResponseData.type';

export const initialState = {};

const BrandReducer: (
    state: DataItemListType,
    brandAction: {
        type: string,
        brands: DataItemListType
    }
) => DataItemListType = (state = initialState, { type, brands }) => {
    switch (type) {
        case UPDATE_BRAND_LIST:
            return {
                ...state,
                ...brands
            };
        default:
            return state;
    }
};

export default BrandReducer;
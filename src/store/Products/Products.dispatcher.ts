import { Dispatch } from 'redux';

import { updateProductList } from 'Store/Products/Products.action';
import { DataItemListType } from 'Type/ResponseData.type';


export class ProductsDispatcher {
    updateProductsList = (dispatch: Dispatch, brands: DataItemListType) => {
        dispatch(updateProductList(brands));
    };
}

export default new ProductsDispatcher();

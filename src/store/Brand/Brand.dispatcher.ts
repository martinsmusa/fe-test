import { Dispatch } from 'redux';

import { updateBrandList } from 'Store/Brand/Brand.action';
import { DataItemListType } from 'Type/ResponseData.type';


export class BrandDispatcher {
    updateBrandList = (dispatch: Dispatch, brands: DataItemListType) => {
        dispatch(updateBrandList(brands));
    };
}

export default new BrandDispatcher();

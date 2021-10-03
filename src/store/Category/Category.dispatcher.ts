import { Dispatch } from 'redux';

import { updateCategoryList } from 'Store/Category/Category.action';
import { DataItemListType } from 'Type/ResponseData.type';


export class CategoryDispatcher {
    updateCategoryList = (dispatch: Dispatch, categories: DataItemListType) => {
        dispatch(updateCategoryList(categories));
    };
}

export default new CategoryDispatcher();

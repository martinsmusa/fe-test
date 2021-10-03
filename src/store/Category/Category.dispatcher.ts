import { Dispatch } from 'redux';

import { updateCategoryList } from 'Store/Category/Category.action';
import { CategoryDataItemListType } from 'Type/ResponseData.type';


export class CategoryDispatcher {
    updateCategoryList = (dispatch: Dispatch, categories: CategoryDataItemListType) => {
        dispatch(updateCategoryList(categories));
    };
}

export default new CategoryDispatcher();

import { Dispatch } from 'redux';

import { updateNestedCategoryList } from './NestedCategory.action';
import { FullCategoryTypeListType } from 'Type/ResponseData.type';


export class NestedCategoryDispatcher {
    updateNestedCategoryList = (dispatch: Dispatch, categories: FullCategoryTypeListType) => {
        dispatch(updateNestedCategoryList(categories));
    };
}

export default new NestedCategoryDispatcher();

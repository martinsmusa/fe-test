import { Dispatch } from 'redux';

import { updateNestedCategoryList, deleteItem } from './NestedCategory.action';
import { FullCategoryTypeListType, PathType } from 'Type/ResponseData.type';


export class NestedCategoryDispatcher {
    updateNestedCategoryList = (dispatch: Dispatch, categories: FullCategoryTypeListType) => {
        dispatch(updateNestedCategoryList(categories));
    };

    deleteItem = (dispatch: Dispatch, path: PathType) => {
        dispatch(deleteItem(path));
    }
}

export default new NestedCategoryDispatcher();

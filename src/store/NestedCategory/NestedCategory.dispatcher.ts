import { Dispatch } from 'redux';

import { updateNestedCategoryList, deleteItem } from './NestedCategory.action';
import { CategoryDataItemType, FullCategoryTypeListType, PathType } from 'Type/ResponseData.type';


export class NestedCategoryDispatcher {
    updateNestedCategoryList = (dispatch: Dispatch, categories: FullCategoryTypeListType) => {
        dispatch(updateNestedCategoryList(categories));
    };

    deleteItem = (dispatch: Dispatch, path: PathType) => {
        dispatch(deleteItem(path));
    }

    addCategory = (dispatch: Dispatch, category: CategoryDataItemType) => {
        const categoryListItem = {
            [category.id]: {
                ...category,
                brands: []
            }
        };

        dispatch(updateNestedCategoryList(categoryListItem));
    }
}

export default new NestedCategoryDispatcher();

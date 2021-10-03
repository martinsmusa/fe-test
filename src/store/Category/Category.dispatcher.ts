import { Dispatch } from "redux";

import { updateCategoryList } from "Store/Category/Category.action";
import { CategoryType } from "Type/Category.type";


export class CategoryDispatcher {
    updateCategoryList = (dispatch: Dispatch, categories: CategoryType[]) => {
        dispatch(updateCategoryList(categories));
    }
}

export default new CategoryDispatcher();

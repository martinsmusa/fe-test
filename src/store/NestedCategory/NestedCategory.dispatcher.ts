import { Dispatch } from 'redux';

import { updateNestedCategoryList, deleteItem, addBrand, addProduct } from './NestedCategory.action';
import { CategoryDataItemType, FullBrandType, FullCategoryTypeListType, PathType } from 'Type/ResponseData.type';


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

    addBrand = (dispatch: Dispatch, brand: FullBrandType, categoryId: string) => {
        dispatch(addBrand(brand, { category: categoryId }));
    }

    addProduct = (
        dispatch: Dispatch,
        brand: FullBrandType,
        categoryId: string,
        brandId: number
    ) => {
        dispatch(addProduct(brand, { category: categoryId, brand: brandId }));
    }
}

export default new NestedCategoryDispatcher();

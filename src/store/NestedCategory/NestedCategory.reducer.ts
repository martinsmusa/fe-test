import {DELETE_NESTED_ITEM, UPDATE_NESTED_CATEGORY_LIST} from './NestedCategory.action';

import {CategoryDataItemListType, FullCategoryTypeListType, PathType} from 'Type/ResponseData.type';

export const initialState = {};

const NestedCategoryReducer: (
    state: FullCategoryTypeListType,
    categoryAction: {
        type: string,
        categories?: FullCategoryTypeListType,
        path?: PathType
    }
) => CategoryDataItemListType = (state = initialState, { type, categories, path }) => {
    switch (type) {
        case UPDATE_NESTED_CATEGORY_LIST:
            return {
                ...state,
                ...categories
            };
        case DELETE_NESTED_ITEM:
            const {
                category: categoryId,
                brand: brandId,
                product: productId
            } = path || {};


            if (categoryId) {
                /**
                 * Delete Category by Id
                 */
                if (!brandId) {
                    const {
                        [categoryId]: categoryToRemove,
                        ...updatedState
                    } = state;

                    return updatedState
                }

                /**
                 * Delete Brand by Id
                 */
                const categoryToUpdate = state[categoryId];
                const brandLocation = categoryToUpdate.brands.findIndex(({id}) => id === brandId)

                if (brandLocation === -1) return state;

                if (!productId) {
                    const updatedBrandList = categoryToUpdate.brands.filter(({id}) => id !== brandId);

                    return {
                        ...state,
                        [categoryId]: {
                            ...categoryToUpdate,
                            brands: updatedBrandList
                        }
                    }
                }

                /**
                 * Delete Product by Id
                 */
                const brands = categoryToUpdate.brands;
                const brandToUpdate = brands[brandLocation];
                const brandsToKeep = brands.slice(brandLocation + 1);
                const productListToUpdate = brandToUpdate.products || [];
                const updatedProductList = productListToUpdate.filter(product => productId !== product.id);

                const updatedBrand = {
                    ...brandToUpdate,
                    products: updatedProductList
                }

                brandsToKeep.push(updatedBrand);
                brandsToKeep.sort((a, b) => a.id - b.id);

                return {
                    ...state,
                    [categoryId]: {
                        ...categoryToUpdate,
                        brands: brandsToKeep
                    }
                };
            }

            return state;
        default:
            return state;
    }
};

export default NestedCategoryReducer;
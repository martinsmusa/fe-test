import { ADD_BRAND, DELETE_NESTED_ITEM, UPDATE_NESTED_CATEGORY_LIST } from './NestedCategory.action';

import { CategoryDataItemListType, FullBrandType, FullCategoryTypeListType, PathType } from 'Type/ResponseData.type';

export const initialState = {};

const NestedCategoryReducer: (
    state: FullCategoryTypeListType,
    categoryAction: {
        type: string,
        categories?: FullCategoryTypeListType,
        path?: PathType,
        brand?: FullBrandType
    }
) => CategoryDataItemListType = (
    state = initialState,
    { type, categories, path, brand }
) => {
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
                const brandsToKeep = brands.filter(({id}) => id !== brandId);
                const productListToUpdate = brandToUpdate.products || [];
                const updatedProductList = productListToUpdate.filter(product => productId !== product.id);

                const updatedBrand = {
                    ...brandToUpdate,
                    products: updatedProductList
                }
                const updatedBrandList = [
                    updatedBrand,
                    ...brandsToKeep
                ];

                updatedBrandList.sort((a, b) => a.id - b.id);

                return {
                    ...state,
                    [categoryId]: {
                        ...categoryToUpdate,
                        brands: updatedBrandList
                    }
                };
            }

            return state;
        case ADD_BRAND:
            const { category } = path || {};

            if (!category || !brand) {
                return state;
            }

            const brandList = state[category]?.brands;

            return {
                ...state,
                [category]: {
                    ...state[category],
                    brands: [
                        brand,
                        ...brandList
                    ]
                }
            };
        default:
            return state;
    }
};

export default NestedCategoryReducer;
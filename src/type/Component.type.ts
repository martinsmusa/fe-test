import { DataItemListType, FullCategoryTypeListType } from 'Type/ResponseData.type';

export interface CategoryListingContainerProps {
    updateCategoryList(categories: DataItemListType): void,

    updateNestedCategoryList(categories: FullCategoryTypeListType): void,

    updateBrandsList(brands: DataItemListType): void,

    updateProductsList(products: DataItemListType): void,
}

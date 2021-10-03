import { DataItemListType } from 'Type/ResponseData.type';

export interface CategoryListingContainerProps {
    updateCategoryList(categories: DataItemListType): void,

    updateBrandsList(brands: DataItemListType): void,

    updateProductsList(products: DataItemListType): void,
}

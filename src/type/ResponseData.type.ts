export interface DataItemType {
    id: string | number;
    name: string;
}

export interface ProductDataItemType extends DataItemType {
    categories: string[],
    brand: string
}

export interface DataItemListType {
    [key: string | number]: DataItemType;
}

export interface ProductDataItemListType {
    [key: string | number]: ProductDataItemType;
}

export interface CategoryListingContainerProps {
    updateCategoryList(categories: DataItemListType): void,

    updateBrandsList(brands: DataItemListType): void,

    updateProductsList(products: DataItemListType): void,
}

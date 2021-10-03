export interface CategoryType {
    id: string;
    name: string;
}

export interface CategoryListType {
    [key: string]: CategoryType
}

export interface CategoryListingContainerProps {
    updateCategoryList(categories: CategoryType[]): void,
}

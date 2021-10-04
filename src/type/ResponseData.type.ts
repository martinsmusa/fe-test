export interface DataItemType {
    id: string | number;
    name: string;
}

export interface CategoryDataItemType extends DataItemType {
    id: string;
}

export interface ProductDataItemType extends DataItemType {
    categories: string[],
    brand: string
}

export interface DataItemListType {
    [key: string | number]: DataItemType;
}

export interface ProductDataItemListType {
    [key: number]: ProductDataItemType;
}

export interface CategoryDataItemListType {
    [key: string]: CategoryDataItemType;
}

export interface ProductType {
    id: number;
    name: string;
}

export interface FullBrandType {
    id: number;
    name: string;
    products: ProductType[]
}

export interface FullCategoryType {
    id: string;
    name: string;
    brands: FullBrandType[]
}

export interface FullCategoryTypeListType {
    [key: string]: FullCategoryType;
}

export interface PathType {
    category: string;
    brand?: number;
    product?: number
}

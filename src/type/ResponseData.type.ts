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

import {
    DataItemListType,
    DataItemType,
    ProductDataItemListType,
    CategoryDataItemType,
    CategoryDataItemListType,
    FullCategoryType, FullCategoryTypeListType
} from 'Type/ResponseData.type';

const indexArray = (acc: any, item: any) => {
    const { id, name } = item;

    return {
        ...acc,
        [id]: { id, name }
    };
}

export const indexFullCategory: (arr: FullCategoryType[]) => FullCategoryTypeListType = (arr) => {
    return arr.reduce((acc, item) => {
        return {
            ...acc,
            [item.id]: item
        }
    }, {});
}

export const indexArrayById: (arr: DataItemType[]) => DataItemListType = (arr) => {
    return arr.reduce((acc: DataItemListType, item: DataItemType) => {
        return indexArray(acc, item)
    }, {});
};

export const indexCategoryArrayById: (arr: CategoryDataItemType[]) => CategoryDataItemListType = (arr) => {
    return arr.reduce((acc: CategoryDataItemListType, item: CategoryDataItemType) => {
        return indexArray(acc, item)
    }, {});
};

// Was unable to resolve this with typescript in a reasonable amount of time
// @ts-ignore
export const indexProductData: (
    arr: DataItemType[],
    brand: number,
    category: string
) => ProductDataItemListType = (arr, brand, category) => {
    // @ts-ignore
    return arr.reduce((acc, item) => {
        const { id } = item;
        // @ts-ignore
        const existingItem = acc[id];

        if (!existingItem) {
            return {
                ...acc,
                [id]: {
                    ...item,
                    ...(brand ? { brand } : {}),
                    categories: [category]
                }
            };
        }

        const { categories = [] } = existingItem;

        if (categories && Array.isArray(categories)) {
            const categoryArr = [
                ...categories,
                category
            ];

            return {
                ...acc,
                [id]: {
                    ...existingItem,
                    ...(brand ? { brand } : {}),
                    categories: [...new Set(categoryArr)]
                }
            };
        }

        return {
            ...acc,
            [id]: {
                ...item,
                ...(brand ? { brand } : {}),
                categories: [category]
            }
        };
    }, {});
};

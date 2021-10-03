import { DataItemListType, DataItemType, ProductDataItemListType } from 'Type/ResponseData.type';

export const indexArrayById: (arr: DataItemType[]) => DataItemListType = (arr) => {
    return arr.reduce((acc: DataItemListType, item: DataItemType) => {
        const { id, name } = item;

        return {
            ...acc,
            [id]: { id, name }
        };
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

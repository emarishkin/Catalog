import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ICardCategory {
    id: number;
    name: string;
    icon?: IconDefinition; 
    image: string;
}

export interface IProductBase {
    id: number;
    name: string;
    price: number;
    image: string;
    rating?: number;
    description: string; 
}

export interface IPopularProducts extends IProductBase {
    category: string;
}

export type IImage = string[];


export interface IProduct extends IProductBase {
    slug: string;
    category: ICardCategory;
    images: IImage;
}
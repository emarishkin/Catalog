import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ICardCategory {
    id: number;
    name: string;
    icon: IconDefinition; 
}

export interface IPopularProducts {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}
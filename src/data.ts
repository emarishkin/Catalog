import type { ICardCategory, IPopularProducts } from "./types";
import { 
  faCar,
  faFire ,
  faGears 
} from '@fortawesome/free-solid-svg-icons';

export const categories: ICardCategory[] = [
  { id: 1, name: 'Автозапчасти', icon: faCar},
  { id: 2, name: 'Выхлопная система', icon: faFire },
  { id: 3, name: 'Прокладки ресивера и впускного коллектора', icon: faGears }
];

export const popularProducts:IPopularProducts[] = [
  {id:1,name:'шланг',price:1000,image:'aaa',category:categories[0].name,rating:2},
  {id:2,name:'Прокладка',price:1000,image:'aaa',category:categories[1].name,rating:2},
  {id:3,name:'Моторное',price:1000,image:'aaa',category:categories[2].name,rating:2},
  {id:4,name:'Зимние',price:1000,image:'aaa',category:categories[1].name,rating:2},
  {id:5,name:'шланг',price:1000,image:'aaa',category:categories[0].name,rating:2}
]
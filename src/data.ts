import type { ICardCategory, IPopularProducts } from "./types";
import { 
  faCar,
  faFire ,
  faGears 
} from '@fortawesome/free-solid-svg-icons';
import KrishkaImg from '../src/public/PROKLADKA.jpg'
import Proka from '../src/public/CRISHKA.jpg'

import ZAPCHASTI from '../src/public/ZAPCHASTI.jpg'
import VIXLOP from '../src/public/VIXLOP.jpg'
import PROKA from '../src/public/PROKA.jpg'

export const categories: ICardCategory[] = [
  { id: 1, name: 'Автозапчасти', icon: faCar, image:ZAPCHASTI},
  { id: 2, name: 'Выхлопная система', icon: faFire, image:VIXLOP},
  { id: 3, name: 'Прокладки ресивера и впускного коллектора', icon: faGears, image:PROKA}
];

export const popularProducts:IPopularProducts[] = [
  {id:1,name:'шланг',price:12000,image:KrishkaImg,category:categories[0].name,rating:5},
  {id:2,name:'Прокладка',price:5000,image:Proka,category:categories[1].name,rating:4.1},
  {id:3,name:'Моторное',price:7100,image:KrishkaImg,category:categories[2].name,rating:2.7},
  {id:4,name:'Зимние',price:1999,image:Proka,category:categories[1].name,rating:3.5},
  {id:5,name:'шланг',price:1000,image:KrishkaImg,category:categories[0].name,rating:2}
]
import type { ICardCategory, IPopularProducts, IProduct } from "./types";
import { 
  faCar,
  faFire ,
  faGears 
} from '@fortawesome/free-solid-svg-icons';
import KrishkaImg from '../src/public/PROKLADKA.jpg'
import Proka from '../src/public/CRISHKA.jpg'

import ZAPCHASTI from './public/ZAPCHASTI.jpg'
import VIXLOP from './public/VIXLOP.jpg'
import PROKA from './public/PROKA.jpg'

export const categories: ICardCategory[] = [
  { id: 1, name: 'Автозапчасти', icon: faCar, image:ZAPCHASTI},
  { id: 2, name: 'Выхлопная система', icon: faFire, image:VIXLOP},
  { id: 3, name: 'Прокладки ресивера и впускного коллектора', icon: faGears, image:PROKA}
];

export const popularProducts:IPopularProducts[] = [
  {id:1,name:'шланг',price:12000,image:KrishkaImg,category:categories[0].name,rating:5,description:'qqqqq'},
  {id:2,name:'Прокладка',price:5000,image:Proka,category:categories[1].name,rating:4.1,description:'qqqqq'},
  {id:3,name:'Моторное',price:7100,image:KrishkaImg,category:categories[2].name,rating:2.7,description:'qqqqq'},
  {id:4,name:'Зимние',price:1999,image:Proka,category:categories[1].name,rating:3.5,description:'qqqqq'},
  {id:5,name:'шланг',price:1000,image:KrishkaImg,category:categories[0].name,rating:2,description:'qqqqq'}
]


export const products:IProduct[] = [
  {
    id: 1,
    name: "Handmade Fresh Table",
    slug: "handmade-fresh-table",
    price: 687,
    description: "Andy shoes are designed to keeping in...",
    image: "https://placehold.co/600x400",
    rating:2.7,
    category: {
      id: 1,
      name: "Others",
      image: "https://placehold.co/600x400",
    },
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400"
    ]
  },
  {
    id: 2,
    name: "Smartwatch",
    slug: "smartwatch",
    price: 139,
    description: "Stylish smartwatch with heart rate monitor, GPS, and message notifications.",
    image: "https://placehold.co/600x400",
    rating:2.7,
    category: {
      id: 2,
      name: "Sports & Recreation",
      image: "https://placeimg.com/640/480/any",
    },
    "images": [
      "https://img.freepik.com/vecteurs-libre/montre-intelligente-image-realiste-noir_1284-11873.jpg?semt=ais_hybrid&w=740&q=80"
    ]
  }
]
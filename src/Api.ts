
import { products } from "./data";
import type { IProduct } from "./types";

export const fetchApiProducts = ():Promise<IProduct[]> => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
         resolve(products)
      },2000)
    })
}
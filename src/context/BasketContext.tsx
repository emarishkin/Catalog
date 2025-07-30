import { createContext, useContext, useState, type FC, type ReactNode } from "react";
import type { IProductBase } from "../types";

interface BasketContextType {
    basketItems:IProductBase[]
    addToBasket:(product:IProductBase) => void
    removeBasket:(productID:number) => void
}

const BasketContext = createContext<BasketContextType | undefined>(undefined)

export const BasketProvider:FC<{children:ReactNode}> = ({children}) => {

    const [basketItems,setBasketItems] = useState<IProductBase[]>([])

    const addToBasket = (product:IProductBase) => {
        setBasketItems(prevItem => [...prevItem,product])
    }

    const removeBasket = (productID:number) => {
        setBasketItems(prevItem => prevItem.filter(item => item.id !== productID))
    }

    return (
        <BasketContext.Provider value={{basketItems,addToBasket,removeBasket}}>
            {children}
        </BasketContext.Provider>
    )
}

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error("useBasket must be used within a BasketProvider");
    }
    return context;
};
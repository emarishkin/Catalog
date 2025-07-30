import { createContext, useContext, useState, type FC, type ReactNode } from "react";
import type { IProductBase } from "../types";

interface BasketItem {
    productId: number;
    quantity: number;
}

interface BasketContextType {
    basketItems: BasketItem[];
    addToBasket: (productId: number) => void;
    removeBasket: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    getTotalItems: () => number;
    getTotalPrice: (products: IProductBase[]) => number;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: FC<{children: ReactNode}> = ({children}) => {
    const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

    const addToBasket = (productId: number) => {
        setBasketItems(prev => {
            const existingItem = prev.find(item => item.productId === productId);
            if (existingItem) {
                return prev.map(item => 
                    item.productId === productId 
                        ? {...item, quantity: item.quantity + 1} 
                        : item
                );
            }
            return [...prev, {productId, quantity: 1}];
        });
    }

    const removeBasket = (productId: number) => {
        setBasketItems(prev => prev.filter(item => item.productId !== productId));
    }

    const increaseQuantity = (productId: number) => {
        setBasketItems(prev => 
            prev.map(item => 
                item.productId === productId 
                    ? {...item, quantity: item.quantity + 1} 
                    : item
            )
        );
    }

    const decreaseQuantity = (productId: number) => {
        setBasketItems(prev => 
            prev.map(item => 
                item.productId === productId && item.quantity > 1
                    ? {...item, quantity: item.quantity - 1} 
                    : item
            ).filter(item => item.quantity > 0)
        );
    }

    const getTotalItems = () => {
        return basketItems.reduce((total, item) => total + item.quantity, 0);
    }

    const getTotalPrice = (products: IProductBase[]) => {
        return basketItems.reduce((total, basketItem) => {
            const product = products.find(p => p.id === basketItem.productId);
            return product ? total + (product.price * basketItem.quantity) : total;
        }, 0);
    }

    return (
        <BasketContext.Provider value={{
            basketItems,
            addToBasket,
            removeBasket,
            increaseQuantity,
            decreaseQuantity,
            getTotalItems,
            getTotalPrice
        }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error("useBasket must be used within a BasketProvider");
    }
    return context;
};


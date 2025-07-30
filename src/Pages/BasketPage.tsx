import { type FC } from "react";
import { useBasket } from "../context/BasketContext";

interface BasketPageProps{}

export const BasketPage:FC<BasketPageProps> = () => {
  
  const {basketItems,removeBasket} = useBasket()

  return (
         <section className="basketPage">
            <h2>Корзина</h2>
            {basketItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul>
                    {basketItems.map(item => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} width="50" />
                            <span>{item.name}</span>
                            <span>{item.price} ₽</span>
                            <button onClick={() => removeBasket(item.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
  )
}
import type { FC } from "react";
import { useBasket } from "../context/BasketContext";
import { useProducts } from "../context/ProductContext";
import { Button } from "antd";

interface BasketPageProps {}

export const BasketPage: FC<BasketPageProps> = () => {
    const { basketItems, removeBasket, increaseQuantity, decreaseQuantity } = useBasket();
    const { allProduct } = useProducts();
    
    const basketProducts = basketItems.map(basketItem => {
        const product = allProduct.find(p => p.id === basketItem.productId);
        return product ? {...product, quantity: basketItem.quantity} : null;
    }).filter((item): item is NonNullable<typeof item> => item !== null);

    const totalPrice = basketProducts.reduce(
        (total, item) => total + (item.price * item.quantity), 
        0
    );

    return (
        <section className="basketPage" style={{ padding: '20px' }}>
            <h2>Корзина</h2>
            {basketProducts.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {basketProducts.map(item => (
                            <li 
                                key={item.id} 
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    marginBottom: '15px',
                                    padding: '10px',
                                    border: '1px solid #eee',
                                    borderRadius: '5px'
                                }}
                            >
                                <img src={item.image} alt={item.name} width="80" />
                                <div style={{ flexGrow: 1 }}>
                                    <h3>{item.name}</h3>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
                                        <span>{item.quantity}</span>
                                        <Button onClick={() => increaseQuantity(item.id)}>+</Button>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div>{item.price * item.quantity} ₽</div>
                                    <Button 
                                        danger 
                                        onClick={() => removeBasket(item.id)}
                                        style={{ marginTop: '5px' }}
                                    >
                                        Удалить
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div style={{ 
                        marginTop: '20px',
                        padding: '15px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '5px',
                        textAlign: 'right',
                        fontWeight: 'bold'
                    }}>
                        Итого: {totalPrice} ₽
                    </div>
                </div>
            )}
        </section>
    );
};
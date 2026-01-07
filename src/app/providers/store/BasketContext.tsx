import { createContext, useState, type PropsWithChildren, useEffect, useContext } from 'react';

interface Item {
    item_id: string;
    name: string;
    price: number;
    quantity: number;
}

interface BasketContextType {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
    addItem: (item: Omit<Item, 'quantity'>) => void;
    removeItem: (id: string) => void;
    updateItemQuantity: (id: string, quantity: number) => void;
    clearCache: () => void;
    totalPrice: number;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const storedBasket = localStorage.getItem('basket');
        if (storedBasket) {
            try {
                const parsed: Item[] = JSON.parse(storedBasket);
                setItems(parsed);
            } catch (err) {
                console.error('Failed to parse basket from localStorage:', err);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(items));
    }, [items]);

    const addItem = (item: Omit<Item, 'quantity'>) =>
        setItems((prev) => {
            const existing = prev.find((i) => i.item_id === item.item_id);
            if (existing) {
                return prev.map((i) =>
                    i.item_id === item.item_id ? { ...i, quantity: i.quantity + 1 } : i,
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });

    const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.item_id !== id));

    const updateItemQuantity = (id: string, quantity: number) => {
        setItems((prev) => {
            if (quantity <= 0) {
                return prev.filter((i) => i.item_id !== id);
            }
            return prev.map((i) => (i.item_id === id ? { ...i, quantity: quantity } : i));
        });
    };

    const clearCache = () => {
        setItems([]);
        localStorage.removeItem('basket');
    };

    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <BasketContext.Provider
            value={{ items, setItems, addItem, removeItem, updateItemQuantity, clearCache, totalPrice }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (context === undefined) {
        throw new Error('useBasket must be used within a BasketProvider');
    }
    return context;
};

export { BasketContext };

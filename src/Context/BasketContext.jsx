import React, {useState, useEffect, useCallback} from "react";
import {Bounce, toast} from 'react-toastify';


export const BasketContext = React.createContext({
    addToCart: () => {
    },
    removeFromCart: () => {
    },
    increaseQuantity: () => {
    },
    decreaseQuantity: () => {
    },
    cartItems: [],
    calculateSubtotal: () => {
    },
});

export const BasketContextProvider = ({children}) => {
    const initialCartItems = JSON.parse(localStorage.getItem("basket")) || [];
    const [cartItems, setCartItems] = useState(initialCartItems);

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = useCallback((product) => {
        toast.success(`${product.title} added to basket`,
        {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        }
    );
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id ? {...item, count: item.count + 1} : item
                );
            } else {
                return [...prev, {...product, count: 1}];
            }
        });
    }, []);


    const removeFromCart = useCallback((productId, product) => {
        toast.info(`Product removed from basket`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce
        });

        setCartItems(prev => prev.filter(item => item.id !== productId));
    }, []);

    const  increaseQuantity = useCallback((productId) => {
        setCartItems(prev => prev.map(item =>
            item.id === productId ? {...item, count: item.count + 1} : item))

    }, []);



    const decreaseQuantity = useCallback((productId) => {
        setCartItems(prev => prev.map(item =>
            item.id === productId ? {...item, count: Math.max(0, item.count - 1)} : item
        ).filter(item => item.id !== productId || item.count > 0));
    }, []);



    const calculateSubtotal = () => {
        return cartItems?.reduce((acc,b) => b.salePrice * b.count + acc, 0)
    };

    return (
        <BasketContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            calculateSubtotal
        }}>
            {children}
        </BasketContext.Provider>
    );
};

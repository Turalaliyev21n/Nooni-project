import React, {useEffect, useState} from "react";
import axios from "axios";

export const DataContext = React.createContext({
    productsLoading: true,
    productsData: null,
})
export const DataContextProvider = ({
                                        children,
                                    }) => {
    const [productsLoading, setProductsLoading] = useState(true);
    const [productsData, setProductsData] = useState(null);


    useEffect(() => {
        (async () => {
            setProductsLoading(true);
            try {
                const response = await axios.get("http://localhost:8000/products");
                setProductsData(response.data);
            } catch (error) {
                console.error('Axios error:', error);
            } finally {
                setProductsLoading(false);
            }
        })();
    }, []);

    const getCard = id => {
        return productsData.find(i => i === id);
    }

    return (
        <DataContext.Provider value={{
            productsLoading,
            productsData,
            getCard
        }}>
            {children}
        </DataContext.Provider>
    )
}

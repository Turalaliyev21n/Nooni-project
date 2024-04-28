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
                const response = await axios.get("https://jumpy-lovely-block.glitch.me/products");
                setProductsData(response.data);
            } catch (error) {
                console.error('Axios error:', error);
            } finally {
                setProductsLoading(false);
            }
        })();
    }, []);

    return (
        <DataContext.Provider value={{
            productsLoading,
            productsData
        }}>
            {children}
        </DataContext.Provider>
    )
}

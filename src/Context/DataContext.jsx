import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Bounce, toast} from "react-toastify";

export const DataContext = React.createContext({
    productsLoading: true,
    productsData: null,
    fetchUserName: () => {},
    accountName: null,
    access : false,
    handleClearStorage: () => {}
})
export const DataContextProvider = ({
                                        children,
                                    }) => {
    const [productsLoading, setProductsLoading] = useState(true);
    const [productsData, setProductsData] = useState(null);
    const [access,setAccess] = useState(false);
    const [accountName,setAccountName] = useState(null);



    const  fetchUserName = useCallback( async() => {
        try {
            const response = await axios.get("http://localhost:8000/user");
            const users = response?.data;
            const userInStorageString = localStorage.getItem("user");
            const userInStorage = JSON.parse(userInStorageString);
            const userInStorageEmail = userInStorage?.email;
            const findUserEmail = users?.find(
                (userData) => userData?.userEmail === userInStorageEmail
            );
            if (userInStorageEmail === findUserEmail?.userEmail) {
                setAccountName(findUserEmail?.userName);
                setAccess(true);
            } else {
                setAccess(false);
            }
        } catch (error) {
            console.error("Xeta:", error);
        }
    }, [setAccountName,setAccess])


    const handleClearStorage = useCallback(() => {
        localStorage.removeItem("user");
        setAccess(false);
        toast.success(`Hesabınızdan çıxmısız.`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    },[setAccess])



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
            getCard,
            fetchUserName,
            accountName,
            access,
            handleClearStorage
        }}>
            {children}
        </DataContext.Provider>
    )
}

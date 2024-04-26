
export const UserDataContext = React.createContext({
    
    basket: {},
    setBasket: () => {
    }
   
})
export const UserDataContextProvider = ({
                                            children,
                                        }) => {

    const [shouldUpdate, setShouldUpdate] = useState(Date.now());




    // BASKET UPDATE


    // BASKET REMOVE

    return (
        <UserDataContext.Provider value={{
            basket,
            setBasket,
            wishlist,
            setWishlist,
            remove,
            update,
            add,
            cache,
            cacheLoading,
            loading,
            basketFetching,
            basketOperationInProgress,
            refresh: () => setShouldUpdate(Date.now()),
        }}>
            {children}
        </UserDataContext.Provider>
    )
}

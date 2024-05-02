import MainRouter from "./router"
import { DataContextProvider } from "./Context/DataContext.jsx";
import { BasketContextProvider } from "./Context/BasketContext.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {

    return (
        <>
            <BasketContextProvider>
                <DataContextProvider>
                    <MainRouter />
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                    />
                </DataContextProvider>
            </BasketContextProvider>
        </>
    )
}

export default App

import MainRouter from "./router"
import {DataContextProvider} from "./Context/DataContext.jsx";

const App = () => {

    return (
        <>
            <DataContextProvider>
                <MainRouter/>
            </DataContextProvider>
        </>
    )
}

export default App

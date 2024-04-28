import { MainLayout } from "./Layout/MainLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Layout/Pages/Home/Home";
import Shop from "./Layout/Pages/Shop/Shop.jsx";


const router = () => createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [

            {
                path: '/',
                element: <Home/>,
            },
            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: 'shop',
                element: <Shop/>,
            },
        ],
    }      
]);
const MainRouter = () => {

    return <RouterProvider router={router()}/>;
};

export default MainRouter;
import { MainLayout } from "./Layout/MainLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Layout/Pages/Home/Home";
import Product from "./Layout/Pages/Product/Product";


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
                path: 'product',
                element: <Product/>,
            },
        ],
    }      
]);
const MainRouter = () => {

    return <RouterProvider router={router()}/>;
};

export default MainRouter;
import { MainLayout } from "./Layout/MainLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Layout/Pages/Home/Home";


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
            }
        ],
    }      
]);
const MainRouter = () => {

    return <RouterProvider router={router()}/>;
};

export default MainRouter;
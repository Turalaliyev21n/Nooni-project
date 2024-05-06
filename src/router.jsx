import { MainLayout } from "./Layout/MainLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Layout/Pages/Home/Home";
import Shop from "./Layout/Pages/Shop/Shop.jsx";
import Blog from "./Layout/Pages/Blog/Blog.jsx"
import About from "./Layout/Pages/About/About.jsx";
import Contact from "./Layout/Pages/Contact/Contact.jsx";
import { ProductDetails } from "./Layout/Pages/ProductDetails/ProductDetails.jsx";
import { Basket } from "./Layout/Pages/Basket/Basket.jsx";
import Wishlist from "./Layout/Pages/Wishlist/Wishlist.jsx";
import LoginRegister from "./Layout/Pages/LoginRegister/LoginRegister.jsx";
import Account from "./Layout/Pages/Account/Account.jsx";
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
            {
                path: 'details/:id',
                element: <ProductDetails />,
            },

             {
                path: 'blog',
                element: <Blog/>,
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'contact',
                element: <Contact/>,
            },
            {
                path: 'basket',
                element: <Basket />,
            },
            {
                path: 'wishlist',
                element: <Wishlist />,
            },
            {
                path: 'loginregister',
                element: <LoginRegister/>,
            }, 
            {
                path: 'account',
                element: <Account/>,
            },               
        ],
    }      
]);
const MainRouter = () => {

    return <RouterProvider router={router()}/>;
};

export default MainRouter;
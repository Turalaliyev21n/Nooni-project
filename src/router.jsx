import { MainLayout } from "./Layout/MainLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Layout/Pages/Home/Home";
import Shop from "./Layout/Pages/Shop/Shop.jsx";
import Blog from "./Layout/Pages/Blog/Blog.jsx"
import About from "./Layout/Pages/About/About.jsx";
import Contact from "./Layout/Pages/Contact/Contact.jsx";
import { ProductDetails } from "./Layout/Pages/ProductDetails/ProductDetails.jsx";
import AddCart from "./Layout/Pages/AddCart/AddCart.jsx";
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
                path: 'addcart',
                element: <AddCart/>,
            },
        ],
    }      
]);
const MainRouter = () => {

    return <RouterProvider router={router()}/>;
};

export default MainRouter;
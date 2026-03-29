import { createBrowserRouter } from 'react-router-dom'
import Register from '../Components/NavbarComp/pages/Auth/Register'
import Home from '../Components/NavbarComp/pages/Home'
import Login from '../Components/NavbarComp/pages/Auth/Login'
import Layout from '../Components/NavbarComp/Layout'
import AboutUs from '../Components/NavbarComp/pages/AboutUs'
import ContactUs from '../Components/NavbarComp/pages/ContactUs'
import Services from '../Components/NavbarComp/pages/Services'
import OurWork from '../Components/NavbarComp/pages/OurWork'
import Products from '../Components/ProductComp/Products'
import ProductDescription from '../Components/ProductComp/ProductDescription'
import Profile from '../Components/NavbarComp/pages/Profile'
import Cart from '../Components/ProductComp/Cart'
import Payment from '../Components/ProductComp/Payment'

export let myMap = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/about",
            element: <AboutUs />
        },
        {
            path: "/contact",
            element: <ContactUs />
        },
        {
            path: "/services",
            element: <Services />
        },
        {
            path: "ourwork",
            element: <OurWork />
        },
        {
            path: "/products",
            element: <Products />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/product/:id",
            element: <ProductDescription />
        },
        {
            path: "/profile",
            element: <Profile />
        },
            {
            path: "/payment",
            element: <Payment />
        }]
    }
])
// pages
import { About, Blogs, Cart, Checkout, Contact, Faq, Home, Login, NotFound, Product, ProductDetails, Register, Shop, Terms, UserDashbord } from "./Pages/Pages.jsx";

// react router
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";

const Router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: < Home />,
    },
    {
      path: "home",
      element: < Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "services",
      element: <Product />,
    },
    {
      path: "details/:id",
      element: <ProductDetails />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "chekout",
      element: <Checkout />,
    },
    {
      path: "blogs",
      element: <Blogs />,
    },
    {
      path: "contact",
      element: <Faq />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "dashbord",
      element: <UserDashbord />,
    },
    {
      path: "contact",
      element: <Contact />,
    },

    {
      path: "terms",
      element: <Terms />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]
}])

export default Router
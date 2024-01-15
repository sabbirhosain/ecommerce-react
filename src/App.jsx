// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
// react slick carousel
// import "~slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick.css"
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom"
// pages
import Home from "./Pages/Home/Home.jsx"
import About from "./Pages/About/About.jsx"
import Product from "./Pages/Product/Product.jsx"
import Blogs from "./Pages/Blogs/Blogs.jsx"
import Contact from "./Pages/Contact/Contact.jsx"
import Shop from "./Pages/Shop/Shop.jsx"
import Cart from "./Pages/Cart/Cart.jsx"
import Faq from "./Pages/FAQ/Faq.jsx"
import Login from "./Pages/Login/Login.jsx"
import Register from "./Pages/Register/Register.jsx"
import Terms from "./Pages/Terms/Terms.jsx"
import NotFound from "./Pages/NotFound/NotFound.jsx"
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx"
import Checkout from "./Pages/Checkout/Checkout.jsx"
import UserDashbord from "./Pages/UserDashbord/UserDashbord.jsx"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/details/:id" element={<ProductDetails />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user-dashbord" element={<UserDashbord />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
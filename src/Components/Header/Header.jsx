import "./Header.css"
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar container-fluid py-3 navbar-expand-lg bg-light">
        <div className="container">
          <Link to={"/"} className="navbar-brand">Ecommerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink to={"/"} className="nav-link" aria-current="page">Home</NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</Link>
                <ul className="dropdown-menu">
                  <li><Link to={"/product"} className="dropdown-item">Product</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/"} className="dropdown-item">Category</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/"} className="dropdown-item">Product Details</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/"} className="dropdown-item">Faq Ask Question</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/"} className="dropdown-item">Trams and Condition</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
                <ul className="dropdown-menu">
                  <li><Link to={"/about"} className="dropdown-item">About us</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/contract"} className="dropdown-item">Contact Us</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/notfounds"} className="dropdown-item">Not Founds</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/faq"} className="dropdown-item">Faq Ask Question</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/terms"} className="dropdown-item">Trams and Condition</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</Link>
                <ul className="dropdown-menu">
                  <li><Link to={"/"} className="dropdown-item">Chack Out</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/"} className="dropdown-item">White List</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/"} className="dropdown-item">Compear</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/"} className="dropdown-item">Order Compleate</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Users</Link>
                <ul className="dropdown-menu">
                  <li><Link to={"/login"} className="dropdown-item">Login</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/register"} className="dropdown-item">Register</Link></li>
                  <li><hr className="dropdown-divider m-0" /></li>
                  <li><Link to={"/user-dashbord"} className="dropdown-item">Dashboard</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to={"/cart"} className="nav-link">Cart <sup className="cart-count">0</sup></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
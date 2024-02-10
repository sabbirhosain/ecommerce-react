import { MdLogin, MdOutlineDashboardCustomize } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FaRegHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import TopHeader from "../TopHeader/TopHeader";
import Download from "../Download/Download";
import "./Navbar.css"
// import "./style.css"
import "./responsive.css"
import Categories from "./Categories/Categories";
import manu_bannar from "../../../assets/menu_banner1.jpg"
import manu_bannar1 from "../../../assets/shop_banner.jpg"
import cart from "../../../assets/cart_thamb1.jpg"
import cart1 from "../../../assets/cart_thamb2.jpg"
import { Link, NavLink } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoMdSend } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <section><Download /></section>
      <section><TopHeader /></section>
      <header className="main_header dark_skin main_menu_uppercase">
        <div class="container">
          <nav class="navbar navbar-expand-lg">
            <div className="col-lg-3">
              <Categories />
            </div>

            {/* cart btn for mobile*/}
            <div className="d-flex align-items-center">
              <IoSearchOutline className="d-sm-none me-3" />
              <ul class="navbar-nav attr-nav align-items-center d-sm-none me-3">
                <li class="dropdown cart_dropdown">
                  <Link to={"#"} class="nav-link cart_trigger" data-bs-toggle="dropdown"><i><FaShoppingCart /></i>
                    <span class="cart_count">2</span></Link>
                  <div class="cart_box dropdown-menu dropdown-menu-right">
                    <ul class="cart_list">
                      <li>
                        <Link to={"#"} class="item_remove"><i class="ion-close"></i></Link>
                        <Link to={"#"}><img src={cart} alt="cart_thumb1" />Variable product 001</Link>
                        <span class="cart_quantity"> 1 x <span class="cart_amount">
                          <span class="price_symbole">$</span></span>78.00</span>
                      </li>
                      <li>
                        <Link to={"#"} class="item_remove"><i class="ion-close"></i></Link>
                        <Link to={"#"}> <img src={cart1} alt="cart_thumb2" />Ornare sed consequat</Link>
                        <span class="cart_quantity"> 1 x <span class="cart_amount">
                          <span class="price_symbole">$</span>
                        </span>81.00</span>
                      </li>
                    </ul>
                    <div class="cart_footer">
                      <p class="cart_total"><strong>Subtotal:</strong> <span class="cart_price">
                        <span class="price_symbole">$</span></span>159.00</p>
                      <p class="cart_buttons">
                        <Link to={"#"} class="btn btn-fill-line btn-radius view-cart">View Cart</Link>
                        <Link to={"#"} class="btn btn-fill-out btn-radius checkout">Checkout</Link>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* toggol btn */}
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-expanded="false">
                <FaBarsStaggered />
              </button>
            </div>

            {/* main manu */}
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="dropdown">
                  <Link to={"#"} data-bs-toggle="dropdown" class="nav-link dropdown-toggle active">Home</Link>
                  <div class="dropdown-menu">
                    <ul>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">Dropdown Menu</Link></li>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">Dropdown Menu</Link></li>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">Dropdown Menu</Link></li>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">Dropdown Menu</Link></li>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">Dropdown Menu</Link></li>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">Dropdown Menu</Link></li>
                    </ul>
                  </div>
                </li>
                <li class="dropdown">
                  <Link to={"#"} class="dropdown-toggle nav-link" data-bs-toggle="dropdown">Pages</Link>
                  <div class="dropdown-menu">
                    <ul>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">About Us</Link></li>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">Contact Us</Link></li>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">Faq</Link></li>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">404 Error Page</Link></li>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">Login</Link></li>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">Register</Link></li>
                      <li><Link to={"#"} class="dropdown-item nav-link nav_item">Terms and Conditions</Link></li>
                    </ul>
                  </div>
                </li>
                <li class="dropdown dropdown-mega-menu">
                  <Link to={"#"} class="dropdown-toggle nav-link" data-bs-toggle="dropdown">Products</Link>
                  <div class="dropdown-menu">
                    <ul class="mega-menu d-lg-flex">
                      <li class="mega-menu-col col-lg-3">
                        <ul>
                          <li class="dropdown-header">Woman's</li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Vestibulum sed</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Donec porttitor</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Curabitur tempus</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Vivamus in tortor</Link></li>
                        </ul>
                      </li>
                      <li class="mega-menu-col col-lg-3">
                        <ul>
                          <li class="dropdown-header">Men's</li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Donec vitae ante</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Etiam ac rutrum</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Quisque condiment</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Curabitur laoreet</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Vivamus in tortor</Link></li>
                        </ul>
                      </li>
                      <li class="mega-menu-col col-lg-3">
                        <ul>
                          <li class="dropdown-header">Kid's</li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Quisque</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Etiam ac rutrum</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Donec porttitor</Link></li>
                        </ul>
                      </li>
                      <li class="mega-menu-col col-lg-3">
                        <ul>
                          <li class="dropdown-header">Accessories</li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Quisque</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Etiam ac rutrum</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                          <li><Link to={"#"} class="dropdown-item nav-link nav_item">Donec porttitor</Link></li>
                        </ul>
                      </li>
                    </ul>
                    <div class="d-lg-flex menu_banners row g-3 px-3">
                      <div class="col-sm-4">
                        <div class="header-banner">
                          <img src={manu_bannar} alt="menu_banner1" />
                          <div class="banne_info">
                            <h6>10% Off</h6>
                            <h4>Wooden Chair</h4>
                            <Link to={"#"}>Shop now</Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="header-banner">
                          <img src={manu_bannar} alt="menu_banner2" />
                          <div class="banne_info">
                            <h6>15% Off</h6>
                            <h4>Wooden Chair</h4>
                            <Link to={"#"}>Shop now</Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="header-banner">
                          <img src={manu_bannar} alt="menu_banner3" />
                          <div class="banne_info">
                            <h6>23% Off</h6>
                            <h4>Wooden Chair</h4>
                            <Link to={"#"}>Shop now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="dropdown">
                  <Link to={"#"} class="dropdown-toggle nav-link" data-bs-toggle="dropdown">Blog</Link>
                  <div class="dropdown-menu dropdown-reverse">
                    <ul>
                      <li><Link to={"#"} class="dropdown-item menu-link dropdown-toggler">Grids</Link>
                        <div class="dropdown-menu">
                          <ul>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">3 columns</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">4 columns</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">Left Sidebar</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">right Sidebar</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">Standard Left</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">Standard right</Link></li>
                          </ul>
                        </div>
                      </li>
                      <li><Link to={"#"} class="dropdown-item menu-link dropdown-toggler">Masonry</Link>
                        <div class="dropdown-menu">
                          <ul>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">3 columns</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">4 columns</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">Left Sidebar</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">right Sidebar</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to={"#"} class="dropdown-item menu-link dropdown-toggler">Single Post</Link>
                        <div class="dropdown-menu">
                          <ul>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">Default</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">left sidebar</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">slider post</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">video post</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">audio post</Link></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to={"#"} class="dropdown-item menu-link dropdown-toggler">List</Link>
                        <div class="dropdown-menu">
                          <ul>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">left sidebar</Link></li>
                            <li><Link to={"#"} class="dropdown-item nav-link nav_item">right sidebar</Link></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="dropdown dropdown-mega-menu">
                  <Link to={"#"} class="dropdown-toggle nav-link" data-bs-toggle="dropdown">Shop</Link>
                  <div class="dropdown-menu">
                    <ul class="mega-menu d-lg-flex">
                      <li class="mega-menu-col col-lg-9">
                        <ul class="d-lg-flex">
                          <li class="mega-menu-col col-lg-4">
                            <ul>
                              <li class="dropdown-header">Shop Page Layout</li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">shop List view</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">shop List Left Sidebar</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">shop List Right Sidebar</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">Left Sidebar</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">Right Sidebar</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">Shop Load More</Link></li>
                            </ul>
                          </li>
                          <li class="mega-menu-col col-lg-4">
                            <ul>
                              <li class="dropdown-header">Other Pages</li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">Cart</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">Checkout</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">My Account</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">Wishlist</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">compare</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">Order Completed</Link></li>
                            </ul>
                          </li>
                          <li class="mega-menu-col col-lg-4">
                            <ul>
                              <li class="dropdown-header">Product Pages</li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">Default</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">Left Sidebar</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">Right Sidebar</Link></li>
                              <li><Link to={"#"} class="dropdown-item nav-link nav_item">Thumbnails Left</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="mega-menu-col col-lg-3">
                        <div class="header_banner">
                          <div class="header_banner_content">
                            <div class="shop_banner">
                              <div class="banner_img overlay_bg_40">
                                <img src={manu_bannar1} alt="shop_banner" />
                              </div>
                              <div class="shop_bn_content">
                                <h5 class="text-uppercase shop_subtitle">New Collection</h5>
                                <h3 class="text-uppercase shop_title">Sale 30% Off</h3>
                                <Link to={"#"} class="btn btn-white rounded-0 btn-sm text-uppercase">Shop Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li><Link to={"#"} class="nav-link nav_item">Contact Us</Link></li>
              </ul>
            </div>

            {/* cart btn for pc*/}
            <ul class="navbar-nav attr-nav align-items-center d-none d-sm-flex">
              <li className="dropdown"><Link to={"#"} class="nav-link">
                <button className="dropdown-toggle search_icon" data-bs-toggle="dropdown" aria-expanded="false"><IoSearchOutline /></button>
                <ul className="dropdown-menu search_dropdown">
                  <li className="search_dropdown_box">
                    <input type="search" className="search_bar" />
                  </li>
                </ul>
              </Link></li>

              <li class="dropdown cart_dropdown">
                <Link to={"#"} class="nav-link cart_trigger" data-bs-toggle="dropdown"><i><FaShoppingCart /></i>
                  <span class="cart_count">2</span></Link>
                <div class="cart_box dropdown-menu dropdown-menu-right">
                  <ul class="cart_list">
                    <li>
                      <Link to={"#"} class="item_remove"><i class="ion-close"></i></Link>
                      <Link to={"#"}><img src={cart} alt="cart_thumb1" />Variable product 001</Link>
                      <span class="cart_quantity"> 1 x <span class="cart_amount">
                        <span class="price_symbole">$</span></span>78.00</span>
                    </li>
                    <li>
                      <Link to={"#"} class="item_remove"><i class="ion-close"></i></Link>
                      <Link to={"#"}> <img src={cart1} alt="cart_thumb2" />Ornare sed consequat</Link>
                      <span class="cart_quantity"> 1 x <span class="cart_amount">
                        <span class="price_symbole">$</span>
                      </span>81.00</span>
                    </li>
                  </ul>
                  <div class="cart_footer">
                    <p class="cart_total"><strong>Subtotal:</strong> <span class="cart_price">
                      <span class="price_symbole">$</span></span>159.00</p>
                    <p class="cart_buttons">
                      <Link to={"#"} class="btn btn-fill-line btn-radius view-cart">View Cart</Link>
                      <Link to={"#"} class="btn btn-fill-out btn-radius checkout">Checkout</Link>
                    </p>
                  </div>
                </div>
              </li>
              <li className="dropdown"><Link to={"#"} class="nav-link">
                <span className="account_icon"><FiUser /></span>
                <button className="dropdown-toggle account_title" data-bs-toggle="dropdown" aria-expanded="false">Account</button>
                <ul className="dropdown-menu account_dropdown">
                  <li><Link to={"#"} className="dropdown-item account_link"><MdLogin className="me-2" /> Login</Link></li>
                  <li><Link to={"#"} className="dropdown-item account_link"><SiGnuprivacyguard className="me-2" /> Register</Link></li>
                  <li><Link to={"#"} className="dropdown-item account_link"><MdOutlineDashboardCustomize className="me-2" /> Dashbord</Link></li>
                </ul>
              </Link>
              </li>
            </ul>

          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
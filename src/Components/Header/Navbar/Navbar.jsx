import TopHeader from '../TopHeader/TopHeader'
import Offcanvas from '../Offcanvas/Offcanvas';
import Categories from '../Categories/Categories';
import { Link, NavLink } from 'react-router-dom';
import { FiUser, HiMiniBarsArrowDown, FaSearch, FaUser, IoMdCart, CiLogin, SiGnuprivacyguard, MdOutlineDashboardCustomize } from "../../../Database/Icon"
import "./Navbar.css"


const Navbar = () => {
  return (
    <>
      <TopHeader />
      <nav className="navbar main_header navbar-expand-lg bg-white py-lg-3">
        <div className="container">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}

          <div className="d-lg-none"><Offcanvas /></div>
          <div className=" d-none d-lg-block"><Categories /></div>

          {/* icons for mobile devices */}
          <div className='d-flex align-items-center d-lg-none ms-auto me-3'>

            <div class="dropdown order-last">
              <button class="dropdown-toggle dropdown_toggle_icon" data-bs-toggle="dropdown" aria-expanded="false"><FaUser /></button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><Link to={"#"} class="dropdown-item account_list" href="#"><CiLogin />&ensp;Login</Link></li>
                <li><Link to={"#"} class="dropdown-item account_list" href="#"><SiGnuprivacyguard />&ensp;Register</Link></li>
                <li><Link to={"#"} class="dropdown-item account_list" href="#"><MdOutlineDashboardCustomize />&ensp;Dashbord</Link></li>
              </ul>
            </div>

            <div className='me-3 order-2'>
              <Link to={"#"} className="action_icon position-relative"><IoMdCart />
                <span className="action_count position-absolute top-0 start-100 translate-middle">0</span>
              </Link>
            </div>

            <div class="dropdown position-static me-3 order-1">
              <button class="dropdown-toggle dropdown_toggle_icon" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                <FaSearch />
              </button>
              <form class="dropdown-menu w-100 p-4">
                <div class="input-group">
                  <input type="text" class="form-control mobile_search_fild" placeholder="Search items..." aria-describedby="search-box" />
                  <button type='submit' class="input-group-text mobile_search_btn" id="srarch-box">Search</button>
                </div>
              </form>
            </div>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><HiMiniBarsArrowDown /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink to={"/"} className="nav-link">Home</NavLink>
              </li>

              {/*Products single dropdown */}
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Products</NavLink>
                <ul className="dropdown-menu dropdown_box">
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                </ul>
              </li>

              {/*Blogs single dropdown */}
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Blogs</NavLink>
                <ul className="dropdown-menu dropdown_box">
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                </ul>
              </li>


              {/*Shop single dropdown */}
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Shop</NavLink>
                <ul className="dropdown-menu dropdown_box">
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                </ul>
              </li>

              {/* multi dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Pages</a>
                <ul className="dropdown-menu dropdown_box">
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                  {/* ===== */}
                  <li className="nav-item dropend">
                    <a className="dropdown-item sub_dropdown dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Sub Dropdown</a>
                    <ul className="dropdown-menu dropdown_box">
                      <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                      <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                      <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                      <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                      {/* ===== */}
                      <li className="nav-item dropend">
                        <a className="dropdown-item sub_dropdown dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Sub Dropdown</a>
                        <ul className="dropdown-menu dropdown_box">
                          <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                          <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                          <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                          <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>

                          {/* ===== */}
                          <li className="nav-item dropstart">
                            <a className="dropdown-item sub_dropdown dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Sub Dropdown</a>
                            <ul className="dropdown-menu dropdown_box">
                              <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                              <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                              <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                              <li><a className="dropdown-item dropdown_list" href="#">Action</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
              </li>

            </ul>

            <div className="account">
              <div class="btn-group">
                <button type="button" class="account_btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><span className="action_icon"><FiUser /></span>&nbsp;Account</button>
                <ul class="dropdown-menu border-0">
                  <li><a class="dropdown-item account_list" href="#"><CiLogin />&ensp;Login</a></li>
                  <li><a class="dropdown-item account_list" href="#"><SiGnuprivacyguard />&ensp;Register</a></li>
                  <li><a class="dropdown-item account_list" href="#"><MdOutlineDashboardCustomize />&ensp;Dashbord</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div >
      </nav >
    </>
  )
}

export default Navbar
import logo from "../../../assets/ecom.png"
import { MdOutlineShoppingCart, MdPublishedWithChanges } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

import "./TopHeader.css"

const TopHeader = () => {
  return (
    <>
      <div className='top_header bg-white border-bottom d-none d-lg-block'>
        <div className='container'>
          <div className="row align-items-center justify-content-between py-2">
            <div className="col-lg-3">
              <div className="logo">
                <img src={logo} className="brand_logo img-fluid" alt="" />
                {/* <a href="#" className="brand_logo">Ecommarce</a> */}
              </div>
            </div>
            <div className="col-lg-5">
              <form action="" method="">
                <div className="search_box">
                  <input type="search" className="search_fild" placeholder="Search Product..." />
                  <input type="button" className="search_btn" value="Search" />
                </div>
              </form>
            </div>
            <div className="col-lg-3">
              <div className="action_box">

                <div className="compare">
                  <span className="action_icon position-relative"><MdPublishedWithChanges />
                    <span className="action_count position-absolute top-0 start-100 translate-middle">0</span>
                  </span><a href="#" className="action_name">&ensp;Compare</a>
                </div>

                <div className="wishlist">
                  <span className="action_icon position-relative"><FaRegHeart />
                    <span className="action_count position-absolute top-0 start-100 translate-middle">0</span>
                  </span><a href="#" className="action_name">&ensp;Wishlist</a>
                </div>

                <div className="cart">
                  <span className="action_icon position-relative"><MdOutlineShoppingCart />
                    <span className="action_count position-absolute top-0 start-100 translate-middle">0</span>
                  </span><a href="#" className="action_name">&ensp;Cart</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopHeader
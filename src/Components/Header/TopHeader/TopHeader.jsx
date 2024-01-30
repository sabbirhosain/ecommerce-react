import "./TopHeader.css"
import logo from "../../../assets/logo.png"
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FaRegHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart, MdPublishedWithChanges } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdLogin, MdOutlineDashboardCustomize } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiTwotoneCloseSquare } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import SelectDropdown from "./SelectDropdown/SelectDropdown";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const TopHeader = () => {
  // get category
  const [category, setCategory] = useState([
    "All Category", "Milks and Dairies", "Clothing & beauty", "Pet Foods & Toy", "Baking material", "Fresh Fruit", "Wines & Drinks", "Fresh Seafood", "Fast food", "Vegetables", "Bread and Juice"
  ]);

  // get country
  const countryList = [];
  const getCountry = async () => {
    try {
      const result = await axios.get("https://countriesnow.space/api/v0.1/countries");
      result.data.data.map((item, index) => {
        countryList.push(item.country)
      })
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div className="top_header">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between py-3">
          <div className="col-md-2">
            <div className="logo"><img src={logo} alt="e-commerce logo" className="img-fluid" /></div>
          </div>

          <div className="col-md-5">
            <div className="search_box">
              <SelectDropdown data={category} placeholder={"All Category"} />
              <div className="search">
                <input type="search" className="search_fild" placeholder="Search Product..." />
                <IoSearchOutline className="search_icon" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            {/* <SelectDropdown data={countryList} placeholder={"Select Country"} /> */}
            <div className="acton_box">

              <div className="compare_box">
                <span className="action_icon position-relative"><MdPublishedWithChanges />
                  <span className="action_count position-absolute top-0 start-100 translate-middle">0</span>
                </span>
                <Link to={"#"} className="action_title">Compare</Link>
              </div>

              <div className="whitlist_box">
                <span className="action_icon position-relative"><FaRegHeart />
                  <span className="action_count position-absolute top-0 start-100 translate-middle">0</span>
                </span>
                <Link to={"#"} className="action_title">WhiteList</Link>
              </div>

              <div className="cart_box">
                <span className="action_icon position-relative"><MdOutlineShoppingCart />
                  <span className="action_count position-absolute top-0 start-100 translate-middle">0</span>
                </span>
                <Link to={"#"} className="action_title">Cart</Link>
                
              </div>

              <div className="account_box">
                <span className="account_icon"><FiUser /></span>
                <button className="dropdown-toggle account_title" data-bs-toggle="dropdown" aria-expanded="false">Account</button>
                <ul className="dropdown-menu account_dropdown">
                  <li><Link to={"#"} className="dropdown-item account_link"><MdLogin className="me-2" /> Login</Link></li>
                  <li><Link to={"#"} className="dropdown-item account_link"><SiGnuprivacyguard className="me-2" /> Register</Link></li>
                  <li><Link to={"#"} className="dropdown-item account_link"><MdOutlineDashboardCustomize className="me-2" /> Dashbord</Link></li>
                </ul>
              </div>


              {/* <FaUserCircle /> */}
              {/* <FaBarsStaggered /> */}
              {/* <IoClose /> */}
              {/* <TfiHeadphoneAlt /> */}
              {/* <AiTwotoneCloseSquare /> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopHeader
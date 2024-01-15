import { HiShoppingCart } from "react-icons/hi";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineCompareArrows, MdOutlineStarPurple500, MdOutlineZoomIn } from "react-icons/md";
import image from "../../../assets/product_img1.jpg"
import { Link } from "react-router-dom";
import "./VerticalProductCard.css"

const VerticalProductCard = () => {
  return (
    <>
      <div className="product">
        <span className="product_flash">New</span>
        <div className="product_img">
          <img src={image} className="img-fluid" alt="product_image" />
          <div className="pro_action_box">
            <ul className="pro_action_list">

              <li className="pro_action_list_item">
                <Link to={"#"} className="pro_action_btn">
                  <i className="pro_action_btn_icon"><HiShoppingCart /></i>
                </Link>
              </li>

              <li className="pro_action_list_item">
                <Link to={"#"} className="pro_action_btn">
                  <i className="pro_action_btn_icon"><MdOutlineCompareArrows /></i>
                </Link>
              </li>

              <li className="pro_action_list_item">
                <Link to={"#"} className="pro_action_btn">
                  <i className="pro_action_btn_icon"><MdOutlineZoomIn /></i>
                </Link>
              </li>

              <li className="pro_action_list_item">
                <Link to={"#"} className="pro_action_btn">
                  <i className="pro_action_btn_icon"><GiSelfLove /></i>
                </Link>
              </li>

            </ul>
          </div>
        </div>
        <div className="product_info">
          <h6 className="product_title">
            <Link to={"/product/details/123"} >woman fullsliv dress sabbir hosain</Link>
          </h6>
          <div className="product_price">
            <span className="price">$68.00</span>
            <del>$99.00</del>
            <span className="discount">20% off</span>
          </div>
          <div className="rating_box">
            <div className="rating_list">
              <span className="rating"><MdOutlineStarPurple500 /></span>
              <span className="rating"><MdOutlineStarPurple500 /></span>
              <span className="rating"><MdOutlineStarPurple500 /></span>
              <span className="rating"><MdOutlineStarPurple500 /></span>
              <span className="rating"><MdOutlineStarPurple500 /></span>
            </div>
            <span className="rating_count">(25)</span>
          </div>
          <div className="pro_switch_wrap">
            <div className="product_color_switch">
              <span className="active" style={{ backgroundColor: "rgb(51, 51, 51)" }}></span>
              <span style={{ backgroundColor: "rgb(124, 80, 47)" }}></span>
              <span style={{ backgroundColor: "rgb(47, 54, 108)" }}></span>
              <span style={{ backgroundColor: "rgb(135, 74, 61)" }}></span>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default VerticalProductCard
import { MdOutlineDashboardCustomize, MdReadMore } from "react-icons/md";
import { FaAccusoft, FaComputer, FaMobileScreen } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsSmartwatch } from "react-icons/bs";
import { BsSpeakerFill } from "react-icons/bs";
import { PiPrinterFill, PiTelevisionSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

import computer from "../../../../assets/menu_banner7.jpg"
import mobile from "../../../../assets/menu_banner6.jpg"
// import "./Categories.css"

const Categories = () => {
  return (
    <>
      <div className="categories_wrap">
        <button type="button" data-bs-toggle="collapse" data-bs-target="#navCatContent" aria-expanded="false" className="categories_btn collapsed">
          <span className="categories_name">All Categories </span>
          <MdOutlineDashboardCustomize />
        </button>
        <div id="navCatContent" className="navbar nav collapse">
          <ul>
            <li className="dropdown dropdown-mega-menu">
              <Link to={"#"} className="dropdown-item nav-link dropdown-toggler" data-bs-toggle="dropdown"><i className="flaticon-tv"><FaComputer /></i> <span>Computer</span></Link>
              
              {/* megha menu */}
              <div className="dropdown-menu">
                <ul className="mega-menu d-lg-flex">
                  <li className="mega-menu-col col-lg-7">
                    <ul className="d-lg-flex">
                      <li className="mega-menu-col col-lg-6">
                        <ul>
                          <li className="dropdown-header">Featured Item</li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Vestibulum sed</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec porttit</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Curabitur</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Vivamus in</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donecante</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Etiam ac</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Quisque </Link></li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-6">
                        <ul>
                          <li className="dropdown-header">Popular Item</li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Curabitur</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Vivamus in</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Quisque</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Etiam ac</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec port</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Curabitur</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-5">
                    <div className="header-banner2">
                      <img src={computer} alt="menu_banner1" />
                      <div className="banne_info">
                        <h6>10% Off</h6>
                        <h4>Computers</h4>
                        <Link to={"#"}>Shop now</Link>
                      </div>
                    </div>
                    <div className="header-banner2">
                      <img src={computer} alt="menu_banner2" />
                      <div className="banne_info">
                        <h6>15% Off</h6>
                        <h4>Top Laptops</h4>
                        <Link to={"#"}>Shop now</Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li className="dropdown dropdown-mega-menu">
              <Link to={"#"} className="dropdown-item nav-link dropdown-toggler" data-bs-toggle="dropdown"><i className="flaticon-responsive"><FaMobileScreen /></i> <span>Mobile &amp; Tablet</span></Link>

              {/* megha menu */}
              <div className="dropdown-menu">
                <ul className="mega-menu d-lg-flex">
                  <li className="mega-menu-col col-lg-7">
                    <ul className="d-lg-flex">
                      <li className="mega-menu-col col-lg-6">
                        <ul>
                          <li className="dropdown-header">Featured Item</li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-6">
                        <ul>
                          <li className="dropdown-header">Popular Item</li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                          <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-5">
                    <div className="header-banner2">
                      <a href="#"><img src={mobile} alt="menu_banner" /></a>
                    </div>
                  </li>
                </ul>
              </div>

            </li>
            <li className="dropdown dropdown-mega-menu">
              <Link to={"#"} className="dropdown-item nav-link dropdown-toggler" data-bs-toggle="dropdown"><i className="flaticon-camera"><FaCameraRetro /></i> <span>Camera</span></Link>

              {/* megha menu */}
              <div className="dropdown-menu">
                <ul className="mega-menu d-lg-flex">
                  <li className="mega-menu-col col-lg-7">
                    <ul className="d-lg-flex">
                      <li className="mega-menu-col col-lg-6">
                        <ul>
                          <li className="dropdown-header">Featured Item</li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Vestibulum sed</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec porttit</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Curabitur temp</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Vivamus in</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Etiam ac rutrum</Link></li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-6">
                        <ul>
                          <li className="dropdown-header">Popular Item</li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Curabitur</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Vivamus</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Quisque</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Etiam ac</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec ante</Link></li>
                          <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec porttitor</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-5">
                    <div className="header-banner2">
                      <Link to={"#"}><img src={mobile} alt="menu_banner" /></Link>
                    </div>
                  </li>
                </ul>
              </div>

            </li>
            <li className="dropdown dropdown-mega-menu">
              <Link to={"#"} className="dropdown-item nav-link dropdown-toggler" data-bs-toggle="dropdown"><i className="flaticon-plugins"><FaAccusoft /></i> <span>Accessories</span></Link>

              {/* megha menu */}
              <div className="dropdown-menu">
                <ul className="mega-menu d-lg-flex">
                  <li className="mega-menu-col col-lg-4">
                    <ul>
                      <li className="dropdown-header">Woman's</li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Vestibulum sed</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec porttitor</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Curabitur tempus</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Vivamus in tortor</Link></li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-4">
                    <ul>
                      <li className="dropdown-header">Men's</li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec vitae ante</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Etiam ac rutrum</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Quisque condimen</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Curabitur laoreet</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Vivamus in tortor</Link></li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-4">
                    <ul>
                      <li className="dropdown-header">Kid's</li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec vitae</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Quisque</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Etiam ac rutrum</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec vitae ante</Link></li>
                      <li><Link to={"#"} className="dropdown-item nav-link nav_item">Donec porttitor</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>

            </li>
            <li><Link to={"#"} className="dropdown-item nav-link nav_item"><i className="flaticon-headphones"><TfiHeadphoneAlt /></i> <span>Headphones</span></Link></li>
            <li><Link to={"#"} className="dropdown-item nav-link nav_item"><i className="flaticon-console"><IoGameControllerOutline /></i> <span>Gaming</span></Link></li>
            <li><Link to={"#"} className="dropdown-item nav-link nav_item"><i className="flaticon-watch"><BsSmartwatch /></i> <span>Watches</span></Link></li>
            <li><Link to={"#"} className="dropdown-item nav-link nav_item"><i className="flaticon-music-system"><BsSpeakerFill /></i> <span>Home Audio &amp; Theater</span></Link></li>
            <li><Link to={"#"} className="dropdown-item nav-link nav_item"><i className="flaticon-monitor"><PiTelevisionSimpleBold /></i> <span>TV &amp; Smart Box</span></Link></li>
            <li><Link to={"#"} className="dropdown-item nav-link nav_item"><i className="flaticon-printer"><PiPrinterFill /></i> <span>Printer</span></Link></li>
            <li>
              <ul className="more_slide_open" style={{ display: "none" }}>
                <li><Link to={"#"} className="dropdown-item nav-link nav_item"><i className="flaticon-fax"><MdOutlineDashboardCustomize /></i> <span>Fax Machine</span></Link></li>
                <li><Link to={"#"} className="dropdown-item nav-link nav_item"><i className="flaticon-mouse"><MdOutlineDashboardCustomize /></i> <span>Mouse</span></Link></li>
              </ul>
            </li>
          </ul>
          <div className="more_categories"><MdReadMore /> &nbsp; &nbsp;More Categories</div>
        </div>
      </div>
    </>
  )
}

export default Categories
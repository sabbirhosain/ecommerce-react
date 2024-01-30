import { DiAndroid, DiWindows } from "react-icons/di";
import { FaApple } from "react-icons/fa6";
import "./Download.css"
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <section className="download_section d-none d-md-block">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <p className="sopping_overview">Free Ground Shipping Over $250 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Download Apps</p>
              <div className="ms-3">
                <DiAndroid className="download_icon" />
                <FaApple className="download_icon mx-2" />
                <DiWindows className="download_icon" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end">
              <div className="dropdown me-3">
                <button className="dropdown-toggle language_title" data-bs-toggle="dropdown" aria-expanded="false">English</button>
                <ul className="dropdown-menu language_box">
                  <li><Link to={"#"} className="dropdown-item lang_name">English</Link></li>
                  <li><Link to={"#"} className="dropdown-item lang_name">France</Link></li>
                  <li><Link to={"#"} className="dropdown-item lang_name">Germany</Link></li>
                </ul>
              </div>
              <div className="dropdown ms-3">
                <button className="dropdown-toggle language_title" data-bs-toggle="dropdown" aria-expanded="false">USD</button>
                <ul className="dropdown-menu country_box">
                  <li><Link to={"#"} className="dropdown-item country_name">USD</Link></li>
                  <li><Link to={"#"} className="dropdown-item country_name">EUR</Link></li>
                  <li><Link to={"#"} className="dropdown-item country_name">GBR</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
import { FaComputer } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";

import "./Offcanvas.css"

const Offcanvas = () => {
  return (
    <>
      <button class="btn btn-outline-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><MdOutlineDashboardCustomize /></button>

      <div class="offcanvas offcanvas_box offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">All Categories</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
          <ul className="navbar-nav list-group ">
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>

            <li className="dropdown list-group">
              <button class="dropdown-toggle list-group-item ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Computer List</span></button>

              <ul class="dropdown-menu p-0 w-100">
                <li> <a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Computer</a></li>
                <li> <a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Computer</a></li>
                <li> <a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Computer</a></li>
                <li> <a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Computer</a></li>
                <li> <a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Computer</a></li>
              </ul>
            </li>

            <li className="dropdown list-group">
              <button class="dropdown-toggle list-group-item ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Dasktop List</span></button>

              <ul class="dropdown-menu p-0 w-100">
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Dasktop</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Dasktop</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Dasktop</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Dasktop</a></li>

                <li className="dropdown list-group">
                  <button class="dropdown-toggle list-group-item ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Laptop List</span></button>

                  <ul class="dropdown-menu p-0 w-100">
                    <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                    <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                    <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                    <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>

                    <li className="dropdown list-group">
                      <button class="dropdown-toggle list-group-item ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Laptop List</span></button>

                      <ul class="dropdown-menu p-0 w-100">
                        <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                        <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                        <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                        <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>

                        <li className="dropdown list-group">
                          <button class="dropdown-toggle list-group-item ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Laptop List</span></button>

                          <ul class="dropdown-menu p-0 w-100">
                            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown list-group">
              <button class="dropdown-toggle list-group-item ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Mobile List</span></button>

              <ul class="dropdown-menu p-0 w-100">
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Mobile</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Mobile</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Mobile</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Mobile</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Mobile</a></li>

                <li className="dropdown list-group">
                  <button class="dropdown-toggle list-group-item ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Laptop List</span></button>

                  <ul class="dropdown-menu p-0 w-100">
                    <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                    <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                    <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                    <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Laptop</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown list-group">
              <button class="dropdown-toggle list-group-item ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Phone List</span></button>

              <ul class="dropdown-menu p-0 w-100">
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Phone</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Phone</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Phone</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Phone</a></li>
              </ul>
            </li>

            <li className="dropdown list-group">
              <button class="dropdown-toggle list-group-item ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Tablate List</span></button>

              <ul class="dropdown-menu p-0 w-100">
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Tablate</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Tablate</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Tablate</a></li>
                <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Tablate</a></li>
              </ul>
            </li>

            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item ( offcanvas_item )"><FaComputer />&ensp;Hello World</a></li>

          </ul>
        </div >
      </div >
    </>
  )
}

export default Offcanvas
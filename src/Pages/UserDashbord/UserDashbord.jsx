import "./UserDashbord.css"
import Layout from '../../Layout/Layout'
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"
import { HiShoppingCart } from "react-icons/hi";
import { IoIosLock } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdAddLocationAlt, MdDashboardCustomize, MdShoppingCartCheckout } from "react-icons/md";


const UserDashbord = () => {
  return (
    <Layout>
      <>
        <Breadcrumb pageTitle={"User Dashbord"} pageName1={"Home"} pageName2={"Login"} pageName3={"Profile"} />
        <section className="user_dashbord_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="dashboard_menu">
                  <ul className="nav nav-tabs flex-column" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="dashboard-tab" data-bs-toggle="tab" href="#dashboard" role="tab" aria-controls="dashboard" aria-selected="true"><i className="me-3"><MdDashboardCustomize /></i>Dashboard</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link " id="orders-tab" data-bs-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false" tabIndex="-1"><i className="me-3"><MdShoppingCartCheckout /></i>Orders</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="address-tab" data-bs-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="false" tabIndex="-1"><i className="me-3"><MdAddLocationAlt /></i>My Address</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="account-detail-tab" data-bs-toggle="tab" href="#account-detail" role="tab" aria-controls="account-detail" aria-selected="false" tabIndex="-1"><i className="me-3"><CgProfile /></i>Account details</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" href="#" aria-selected="false" tabIndex="-1" role="tab"><i className="me-3"><IoIosLock /></i>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="tab-content dashboard_content">
                  <div className="tab-pane fade active show" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="dash_title">Dashboard</h3>
                      </div>
                      <div className="card-body">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui iusto ad, sed omnis hic natus id dolores recusandae eveniet esse consequuntur porro. Velit aliquam sint nihil id atque nulla? Nihil!</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="dash_title">Orders</h3>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>#1234</td>
                                <td>March 15, 2020</td>
                                <td>Processing</td>
                                <td>$78.00 for 1 item</td>
                                <td><a href="#" className="btn btn-outline-warning btn-sm px-3">View</a></td>
                              </tr>
                              <tr>
                                <td>#2366</td>
                                <td>June 20, 2020</td>
                                <td>Completed</td>
                                <td>$81.00 for 1 item</td>
                                <td><a href="#" className="btn btn-outline-warning btn-sm px-3">View</a></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card mb-3 mb-lg-0">
                          <div className="card-header">
                            <h3 className="dash_title">Billing Address</h3>
                          </div>
                          <div className="card-body">
                            {/* <address>House #15<br>Road #1<br>Block #C <br />Angali <br /> Vedora <br />1212</address> */}
                            <p>New York</p>
                            <a href="#" className="btn btn-outline-primary btn-sm px-3">Edit</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-header">
                            <h3 className="dash_title">Shipping Address</h3>
                          </div>
                          <div className="card-body">
                            {/* <address>House #15<br>Road #1<br>Block #C <br>Angali <br> Vedora <br>1212</address> */}
                            <p>New York</p>
                            <a href="#" className="btn btn-outline-primary btn-sm px-3">Edit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="account-detail" role="tabpanel" aria-labelledby="account-detail-tab">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="dash_title">Account Details</h3>
                      </div>
                      <div className="card-body">
                        <p>Already have an account? <a href="#">Log in instead!</a></p>
                        <form method="post" name="enq">
                          <div className="row">
                            <div className="form-group col-md-6 mb-3">
                              <label>First Name <span className="required">*</span></label>
                              <input required="" className="form-control" name="name" type="text" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                              <label>Last Name <span className="required">*</span></label>
                              <input required="" className="form-control" name="phone" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label>Display Name <span className="required">*</span></label>
                              <input required="" className="form-control" name="dname" type="text" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label>Email Address <span className="required">*</span></label>
                              <input required="" className="form-control" name="email" type="email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label>Current Password <span className="required">*</span></label>
                              <input required="" className="form-control" name="password" type="password" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label>New Password <span className="required">*</span></label>
                              <input required="" className="form-control" name="npassword" type="password" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label>Confirm Password <span className="required">*</span></label>
                              <input required="" className="form-control" name="cpassword" type="password" />
                            </div>
                            <div className="col-md-12">
                              <button type="submit" className="btn btn-outline-success px-4" name="submit" value="Submit">Save</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout >
  )
}

export default UserDashbord
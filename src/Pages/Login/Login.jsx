import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Layout from '../../Layout/Layout'
import "./Login.css"

const Login = () => {
  return (
    <Layout title={"Login - Ecommerce"}>
      <section className='login_section'>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <div className="login_box">
                <h2 className="login_title mb-4">Login Account</h2>

                {/* ======> main from start<========= */}
                <form>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Email" />
                  </div>
                  <div className="form-group mb-3">
                    <input className="form-control" type="password" placeholder="Password" />
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                    <label className="form-check-label" for="flexCheckIndeterminate">I agree to terms & Policy.</label>
                  </div>
                  <button type="submit" className="login_btn">Submit</button>
                </form>
                {/* ======> main from end<========= */}

                <div className="from_devider"><span className="login_or">or</span></div>
                <div className="login_socail mb-4">
                  <Link to={"#"} className="login_socail_link facebook me-2"><FaFacebookF className="login_socail_icon" /> Facebook</Link>
                  <Link to={"#"} className="login_socail_link google ms-2"><FcGoogle className="login_socail_google" /> Google</Link>
                </div>
                <div className="text-center">
                  <p className="alrady_account">I have no account? <Link to={"/register"} className="login_link">register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Login
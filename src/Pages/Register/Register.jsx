import "./Register.css"
import Layout from '../../Layout/Layout'
import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
  return (
    <Layout title={"Register - Ecommerce"}>
      <section className='register_section'>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <div className="register_box">
                <h2 className="register_title mb-4">Create An Account</h2>

                {/* ======> main from start<========= */}
                <form>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Name" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Email" />
                  </div>
                  <div className="form-group mb-3">
                    <input className="form-control" type="password" placeholder="Password" />
                  </div>
                  <div className="form-group mb-3">
                    <input className="form-control" type="password" placeholder="Confirm Password" />
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                    <label className="form-check-label" for="flexCheckIndeterminate">I agree to terms & Policy.</label>
                  </div>
                  <button type="submit" className="reg_btn">Submit</button>
                </form>
                {/* ======> main from end<========= */}

                <div className="from_devider"><span className="reg_or">or</span></div>
                <div className="reg_socail mb-4">
                  <Link to={"#"} className="reg_socail_link facebook me-2"><FaFacebookF className="reg_socail_icon" /> Facebook</Link>
                  <Link to={"#"} className="reg_socail_link google ms-2"><FcGoogle className="reg_socail_google" /> Google</Link>
                </div>
                <div className="text-center">
                  <p className="alrady_account">Already have an account? <Link to={"/login"} className="login_link">Log in</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  )
}

export default Register
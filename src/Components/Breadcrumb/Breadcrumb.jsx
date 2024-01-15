import { Link } from "react-router-dom"
import "./Breadcrumb.css"

const Breadcrumb = ({ pageTitle, pageName1, pageName2, pageName3 }) => {
  return (
    <section className="breadcrumb_section mb-5">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-md-6">
            <div className="breadcrumb_page_title">
              <h4>{pageTitle}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <ol className="breadcrumb m-0 justify-content-md-end">
              <li className="breadcrumb-item"><Link to={"#"}>{pageName1}</Link></li>
              <li className="breadcrumb-item"><Link to={"#"}>{pageName2}</Link></li>
              <li className="breadcrumb-item">{pageName3}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
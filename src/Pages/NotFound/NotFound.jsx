import "./NotFound.css"
import Layout from '../../Layout/Layout'

const NotFound = () => {
  return (
    <Layout title={"Not Found - Ecommerce"}>
      <section className='notfound_section'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="notfound_box">
                <h1 className="notfound_title">404</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound
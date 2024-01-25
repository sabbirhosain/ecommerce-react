import Layout from '../../Layout/Layout'
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel'
import Fetch from '../../Components/Fetch'

const Home = () => {
  return (
    <Layout title={"Home - Ecommerce"}>
      <div className="container">
        <div className="row justify-content-between">
          <ProductCarousel />
          {/* <ProductCarousel /> */}
          {/* <ProductCarousel /> */}
          <Fetch />
        </div>
      </div>
    </Layout>
  )
}

export default Home
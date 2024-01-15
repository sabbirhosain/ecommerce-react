import "./Product.css"
import Layout from '../../Layout/Layout'
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import VerticalProductCard from "../../Components/ProductCard/Vertical/VerticalProductCard";
import HorizontalProductCard from "../../Components/ProductCard/Horizontal/HorizontalProductCard";

const Product = () => {
  return (
    <Layout title={"Product - Ecommerce"}>
      <Breadcrumb pageTitle={"Shoping Cart"} pageName1={"Home"} pageName2={"Product"} pageName3={"Add to Cart"} />
      <section className="product_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <VerticalProductCard />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <VerticalProductCard />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <VerticalProductCard />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <VerticalProductCard />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <VerticalProductCard />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <HorizontalProductCard />
          </div>
        </div>
      </section>

    </Layout >
  )
}

export default Product
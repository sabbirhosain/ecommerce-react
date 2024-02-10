import Home_Carousel from '../../Components/Home_Carousel/Home_Carousel'
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel'
import ProductFilter from '../../Components/ProductFilter/ProductFilter'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'

import carousel3 from "../../assets/home-carousel/home3.webp"
import carousel4 from "../../assets/home-carousel/home4.webp"

import "./Home.css"
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet><title>Home Page</title></Helmet>
      <section className='hero_section'>
        <div className="container-fluid g-0">
          <div className="row">
            <div className="col-lg-8 g-0">
              <Home_Carousel />
            </div>
            <div className="col-lg-4 g-0">
              <div className="container">
                <div className="row flex-row  flex-md-column">
                  <div className='col-6 col-md-6 col-xl-12 g-0'><img src={carousel4} className='img-fluid' alt="" /></div>
                  <div className='col-6 col-md-6 col-xl-12 g-0'><img src={carousel3} className='img-fluid' alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='product_section'>
        <div className="container">
          <SectionTitle secTitle={"Exclusive Products"} />
          <ProductFilter />
        </div>
      </section>

      <section className='product_section'>
        <div className="container">
          <SectionTitle secTitle={"Featured Products"} />
          <ProductCarousel />
        </div>
      </section>

      {/* <Header /> */}

    </>
  )
}

export default Home
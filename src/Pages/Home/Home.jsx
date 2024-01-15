import React from 'react'
import Layout from '../../Layout/Layout'
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel'

const Home = () => {
  return (
    <Layout title={"Home - Ecommerce"}>
      <div className="container">
        <ProductCarousel />
      </div>
    </Layout>
  )
}

export default Home
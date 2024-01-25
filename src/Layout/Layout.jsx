import { Helmet } from 'react-helmet'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import TopHeader from '../Components/Header/TopHeader/TopHeader'

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>


      <header style={{ marginBottom: "80px" }}>
        <TopHeader />
      </header>


      <main>
        {children}
      </main>


      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
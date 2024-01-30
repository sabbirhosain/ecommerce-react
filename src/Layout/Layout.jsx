import { Helmet } from 'react-helmet'
import Navbar from '../Components/Header/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>


      <header style={{ marginBottom: "80px" }}>
        <Navbar />
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
import { Helmet } from 'react-helmet'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>


      <header style={{ marginBottom: "80px" }}>
        <Header />
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
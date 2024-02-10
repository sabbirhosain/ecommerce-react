import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Header/Navbar/Navbar'

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  )
}

export default Layout
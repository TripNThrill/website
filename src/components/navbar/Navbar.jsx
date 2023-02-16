import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../assets/burger.svg'
import { ReactComponent as Brand } from '../../assets/logo.svg'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/"><Brand /></Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/careers">CAREERS</Link>
            </li>
            <li>
              <Link to="/oprators">OPERATORS</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
import { Link } from "react-router-dom"
import { useRef } from "react"
import "../../styles/Navbar.css"

function Navbar({ setBackgrounImage }) {
  const navRef = useRef()

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  const handleOnClick = (classChange) => {
    setBackgrounImage(classChange)
    showNavBar()
  }
  return (
    <>
      <header>
        <Link onClick={() => setBackgrounImage("home")} to="/">
          <img className="logo" alt="logo" src="./assets/shared/logo.svg" />
        </Link>
        <hr />
        <nav ref={navRef}>
          <Link onClick={() => handleOnClick("home")} to="/">
            Home
          </Link>
          <Link onClick={() => handleOnClick("destination")} to="/destination">
            Destination
          </Link>
          <Link onClick={() => handleOnClick("crew")} to="/crew">
            Crew
          </Link>
          <Link onClick={() => handleOnClick("technology")} to="/technology">
            Technology
          </Link>
          <button className="nav-button nav-close-button" onClick={showNavBar}>
            <img src="../../src/assets/shared/icon-close.svg" />
          </button>
        </nav>
        <button id="close-button" className="nav-button" onClick={showNavBar}>
          <img src="../../src/assets/shared/icon-hamburger.svg" />
        </button>
      </header>
    </>
  )
}

export default Navbar

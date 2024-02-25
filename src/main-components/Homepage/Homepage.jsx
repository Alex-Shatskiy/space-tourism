import { useEffect } from "react"
import "../../styles/Homepage.css"

function Homepage() {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "scroll"
    }
  }, [])
  return (
    <div className="homepage-container">
      <div className="hompage-content">
        <h5 className="barlow-condensed">SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className="bellefair">SPACE</h1>
        <p className="barlow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="hompage-image ">
        <h2 className="bellefair">EXPLORE</h2>
      </div>
    </div>
  )
}

export default Homepage

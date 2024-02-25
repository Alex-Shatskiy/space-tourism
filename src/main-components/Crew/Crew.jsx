import { useEffect } from "react"

function Crew() {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "scroll"
    }
  }, [])
  return (
    <>
      <h1>Crew</h1>
    </>
  )
}

export default Crew

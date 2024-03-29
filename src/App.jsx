import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import data from "../public/assets/data.json"

import Crew from "./main-components/Crew/Crew.jsx"
import Destination from "./main-components/Destination/Destination.jsx"
import Technology from "./main-components/Technology/Technology.jsx"
import Navbar from "./main-components/Navbar/Navbar.jsx"
import Homepage from "./main-components/Homepage/Homepage"

import "./App.css"
import "./styles/Navbar.css"

function App() {
  const [backgroundImage, setBackgrounImage] = useState("home")

  return (
    <main className={`main-container ${backgroundImage}`}>
      <Navbar setBackgrounImage={setBackgrounImage} />
      <Routes>
        <Route path="/space-tourism/" element={<Homepage />} />
        <Route
          path="/space-tourism/destination"
          element={<Destination destinations={data.destinations} />}
        />
        <Route path="/space-tourism/crew" element={<Crew />} />
        <Route path="/space-tourism/technology" element={<Technology />} />
      </Routes>
    </main>
  )
}

export default App

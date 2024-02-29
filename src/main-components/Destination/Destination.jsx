import { useState } from "react"
import "../../styles/Destination.css"

function Destination({ destinations }) {
  const [destination, setDestination] = useState({ name: "Moon", index: 0 })

  const moonSelection = (place, i) => {
    return setDestination({ name: place, index: i })
  }

  const displayMoonImage = (data, state) => {
    return data[state.index].images.png
  }

  const displayMoonSelection = (data, state) => {
    return data.map((place, i) => {
      return (
        <p
          key={i}
          onClick={() => moonSelection(place.name, i)}
          className="place barlow-condensed"
        >
          {place.name}
        </p>
      )
    })
  }

  const displayMoonData = (data, state) => {
    return (
      <>
        <h1 className="bellefair">{data[state.index].name.toUpperCase()}</h1>
        <p className="barlow">{data[state.index].description}</p>
      </>
    )
  }

  const displayMoonDistance = (data, state) => {
    return (
      <>
        <div className="travel distance">
          <h3 className="barlow-condensed">AVG. DISTANCE</h3>
          <h2 className="bellefair">
            {data[state.index].distance.toUpperCase()}
          </h2>
        </div>
        <div className="travel time">
          <h3 className="barlow-condensed">EST. TRAVEL TIME</h3>
          <h2 className="bellefair">
            {data[state.index].travel.toUpperCase()}
          </h2>
        </div>
      </>
    )
  }

  return (
    <div className="destination-container">
      <div className="destination-info">
        <div className="destination-image-title">
          <h5 className="barlow-condensed"> PICK YOUR DESTINATION</h5>
          <img
            alt={destination.name}
            src={displayMoonImage(destinations, destination)}
          />
        </div>
        <div className="destination-rest-info">
          <div className="selection-container">
            {displayMoonSelection(destinations, destination)}
          </div>
          <div className="moon-info">
            {displayMoonData(destinations, destination)}
          </div>
          <hr />
          <div className="destination-distance">
            {displayMoonDistance(destinations, destination)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination

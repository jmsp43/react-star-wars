import "./App.css";
import ShipCard from "./components/ShipCard";
import SWapi from "./services/SWapi";
import { useState, useEffect } from "react";

function App() {
  const [starShips, setStarShip] = useState([]);


  useEffect(() => {
    exists()
    console.log('fetch star ships')
    }, [])

  const loaded = () => {
    //console.log("started loaded func");

    // let starShipArr = starShips.results;
    console.log(starShips)

    const mapStarShips = starShips.map((ship, i) => {
      return(
        <ShipCard
        key={i}
        name={ship.name}
        model={ship.model} />
      )

      //setStarShip(ship)
      //console.log(ship)
    })

    return (
      <div>
        {mapStarShips}
      </div>
    );
  };

  const exists = () => {
    //then is a promise callback
    
    SWapi().then(shipData => {
      setStarShip(shipData.results)
    })
    
    console.log('exists function is running')
    return (
      <div>
        <h1>Exists func</h1>
      </div>
    );
  };


  return (
    <div className="App">
      <h1 className = 'title'>Star Wars Ships</h1>
      {starShips.length > 0  ? loaded() : <h1>ships are loading</h1>}
    </div>
  );
}

export default App;


